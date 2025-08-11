import "../style.css";
import CountryData from "../CountriesData.jsx";
import AddCountryCard from "./AddCountryCard.jsx";

export default function CountryCard({ query, region }) {
  const filteredCountries = CountryData.filter((country) => {
    const matchesQuery = country.name.common
      .toLowerCase()
      .includes(query.toLowerCase());
    const matchesRegion = region ? country.region === region : true;
    return matchesQuery && matchesRegion;
  });

  return (
    <div className="box-container">
      {filteredCountries.map((country) => (
        <AddCountryCard
          key={country.name.common}
          name={country.name.common}
          region={country.region}
          flag={country.flags.svg}
          population={country.population.toLocaleString("en-IN")}
          capital={country.capital?.[0]}
        />
      ))}
    </div>
  );
}
