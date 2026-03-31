import { useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { listGamesApi } from "../api/games";
import GameGrid from "../components/games/GameGrid";

const tabs = ["ALL", "PUZZLE", "ARCADE", "STRATEGY", "TRIVIA", "SPORTS"];

export default function Games() {
  const [category, setCategory] = useState("ALL");
  const [search, setSearch] = useState("");

  const queryParams = useMemo(
    () => ({
      ...(category !== "ALL" ? { category } : {}),
      ...(search ? { search } : {}),
    }),
    [category, search]
  );

  const { data: games = [] } = useQuery({
    queryKey: ["games", queryParams],
    queryFn: () => listGamesApi(queryParams),
  });

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Games</h1>
      <div className="flex flex-wrap gap-2">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setCategory(tab)}
            className={`rounded-full px-3 py-1 text-sm ${category === tab ? "bg-brand-primary" : "bg-dark-700"}`}
          >
            {tab}
          </button>
        ))}
      </div>
      <input
        className="w-full rounded-lg border-dark-500 bg-dark-800"
        placeholder="Search games..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <GameGrid games={games} />
    </div>
  );
}
