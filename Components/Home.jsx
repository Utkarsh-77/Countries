import { useState } from "react";
import CountryCard from "./CountryCard";
import SearchAndFilter from "./SearchAndFilter";

export default function Home() {
  const [query, setQuery] = useState("");
  const [region, setRegion] = useState("");

  return (
    <main>
      <SearchAndFilter setQuery={setQuery} setRegion={setRegion} />
      <CountryCard query={query} region={region} />
    </main>
  );
}
