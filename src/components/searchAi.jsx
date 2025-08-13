import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const BASE = "https://estrada-search-ai-backend-production.up.railway.app";

async function safeGetJSON(url) {
  const res = await fetch(url, { headers: { Accept: "application/json" } });
  const text = await res.text();
  if (!res.ok) {
    throw new Error(`HTTP ${res.status} ${res.statusText}: ${text.slice(0, 300)}`);
  }
  try {
    return JSON.parse(text);
  } catch (err) {
    throw new Error(`JSON parse failed. Got: ${text}`);
  }
}

export default function AISearchBar() {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Datalist uchun variantlar olish (debounce 300ms)
  useEffect(() => {
    if (!query.trim()) {
      setSuggestions([]);
      return;
    }
    const t = setTimeout(async () => {
      try {
        const data = await safeGetJSON(
          `${BASE}/api/suggestions?q=${encodeURIComponent(query)}`
        );

        // Backenddan kelgan ma'lumotlarni label bilan moslashtiramiz
        const mapped = data.map(item => ({
          label: item.title,
          path: item.path
        }));

        setSuggestions(mapped);
      } catch (e) {
        console.error("Suggestions error:", e);
        setSuggestions([]);
      }
    }, 300);
    return () => clearTimeout(t);
  }, [query]);

  // Variant tanlanganda
  const handleSelect = (e) => {
    const typed = e.target.value;
    const hit = suggestions.find(s => s.label === typed);
    if (hit?.path) navigate(hit.path);
  };

  // Forma submit bo‘lganda
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    try {
      const data = await safeGetJSON(
        `${BASE}/api/search?q=${encodeURIComponent(query)}`
      );

      if (data.found && data.path) {
        navigate(data.path);
      } else if (data.suggestedPath) {
        const go = window.confirm(
          `Topilmadi.\nAI tavsiyasi: "${data.suggestion}"\nO‘sha sahifaga o'taymi?`
        );
        if (go) navigate(data.suggestedPath);
      } else {
        alert(`Topilmadi. AI so‘zni to‘g‘riladi: "${data.fixedQuery}"`);
      }
    } catch (err) {
      console.error("Search error:", err);
      alert("Qidirishda xatolik. Konsolni tekshiring.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="searchForm" style={{ display: "flex", gap: 8 }}>
      <input
        list="ai-suggestions"
        placeholder="Sayt bo'ylab izlash..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onInput={handleSelect}
        style={{ padding: 8, flex: 1, border: "1px solid navy" }}
      />
      <datalist id="ai-suggestions">
        {suggestions.map((s) => (
          <option key={s.path} value={s.label} />
        ))}
      </datalist>

      <button type="submit" disabled={loading}>
        {loading ? "Qidirilmoqda..." : "Izlash"}
      </button>
    </form>
  );
}
