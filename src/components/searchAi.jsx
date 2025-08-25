import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const BASE_URL = "https://estrada-search-ai-backend-production.up.railway.app";

// JSON xavfsiz olish
async function safeFetchJSON(url) {
  const res = await fetch(url, { headers: { Accept: "application/json" } });
  const text = await res.text();
  if (!res.ok) {
    throw new Error(`HTTP ${res.status}: ${text}`);
  }
  try {
    return JSON.parse(text);
  } catch (err) {
    console.error("JSON parse error. Response:", text);
    throw err;
  }
}

export default function AISearchBar() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Formani submit qilish
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    try {
      const data = await safeFetchJSON(
        `${BASE_URL}/api/search?q=${encodeURIComponent(query)}`
      );

      if (data.found && data.path) {
        navigate(data.path);
      } else {
        alert(`Topilmadi. AI to‘g‘rilagan variant: "${data.fixedQuery}"`);
      }
    } catch (err) {
      console.error("Search error:", err);
      alert("Qidirishda xatolik yuz berdi.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", gap: 8 }}>
      <input
        placeholder="Sayt bo'ylab izlash..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ padding: 8, flex: 1, border: "1px solid navy" }}
      />
      <button type="submit" disabled={loading}>
        {loading ? "Qidirilmoqda..." : "Izlash"}
      </button>
    </form>
  );
}
