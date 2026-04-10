import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@/constants/routes";
import { Input } from "@/components/ui/Input";

export function SearchBar() {
  const [q, setQ] = useState("");
  const navigate = useNavigate();

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = q.trim();
    if (!trimmed) return;
    navigate({ pathname: ROUTES.search, search: `?q=${encodeURIComponent(trimmed)}` });
  }

  return (
    <form onSubmit={onSubmit} className="w-full max-w-md">
      <Input
        name="q"
        placeholder="ابحث في الأخبار..."
        value={q}
        onChange={(e) => setQ(e.target.value)}
        aria-label="بحث"
      />
    </form>
  );
}
