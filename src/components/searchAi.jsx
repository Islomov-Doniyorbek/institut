import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AISearchBar() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);

    try {
      const res = await fetch(
        `https://estrada-search-ai-backend-production.up.railway.app/api/search?q=${encodeURIComponent(query)}`
      );

      const data = await res.json();
      console.log();
      
      if (data.found) {
        // Topilgan sahifaga o‘tadi
        navigate(data.path);
      } else if (data.suggestedPath) {
        // Agar AI tavsiya qilgan sahifa bo‘lsa, tasdiqlash so‘raymiz
        const goToSuggested = window.confirm(
          `Hech narsa topilmadi.\nAI taklifi: "${data.suggestion}"\nO‘sha sahifaga o'taymi?`
        );
        if (goToSuggested) {
          navigate(data.suggestedPath);
        }
      } else {
        alert(`Hech narsa topilmadi. AI so‘zni to‘g‘riladi: "${data.fixedQuery}"`);
      }
    } catch (err) {
      console.error(err);
      alert("Qidirishda xatolik yuz berdi.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSearch} className="searchForm" style={{ display: "flex", gap: "8px" }}>
      <input
        type="text"
        placeholder="Sayt bo'ylab izlash..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ padding: "8px", flex: 1, border: "1px solid navy" }}
      />
      <button type="submit" disabled={loading}>
        {loading ? "Qidirilmoqda..." : "Izlash"}
      </button>
    </form>
  );
}
