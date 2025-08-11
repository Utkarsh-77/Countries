import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import "../CountryDetail.css";
import Loading from "./Loading";

export default function CountryPage() {

  const params = useParams();
  console.log(params);
  const countryData = params.CountryDetail;

  const [country, setCountry] = useState(null);
  const [borders, setBorders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!countryData) return;

    setLoading(true);
    setCountry(null);
    setBorders([]);

    let isMounted = true; // Prevent state updates if unmounted

    fetch(`https://restcountries.com/v3.1/name/${countryData}?fullText=true`)
      .then((res) => res.json())
      .then(([data]) => {
        if (!isMounted) return;
        setCountry(data);

        if (data.borders?.length > 0) {
          Promise.all(
            data.borders.map((code) =>
              fetch(`https://restcountries.com/v3.1/alpha/${code}`).then(
                (res) => res.json()
              )
            )
          )
            .then((borderCountries) => {
              if (!isMounted) return;
              setBorders(borderCountries.map(([border]) => border.name.common));
            })
            .catch((err) =>
              console.error("Error fetching border countries:", err)
            );
        }
      })
      .catch((err) => console.error("Error fetching country:", err))
      .finally(() => setLoading(false));

    return () => {
      isMounted = false; // cleanup
    };
  }, [countryData]);

  if (loading) return <Loading />;

  if (!country) return <p>No data found</p>;

  return (
    <main>
      <div className="div-back">
        <Link
          className="back-btn"
          onClick={() => window.history.back()}
          style={{ cursor: "pointer" }}
        >
          <span style={{ fontSize: "18px" }}>&#8592;</span> Back
        </Link>
      </div>

      <div className="container">
        <div className="pic-div">
          <img src={country.flags.svg} alt={`${country.name.common} flag`} />
        </div>

        <div className="text-div">
          <p className="Heading-name">{country.name.common}</p>

          <div className="p-container">
            <div className="left-p">
              <p>
                <b>Native Name: </b>
                <span className="nativeName">
                  {Object.values(country.name.nativeName || {})[0]?.common}
                </span>
              </p>
              <p>
                <b>Population: </b>
                <span className="population">
                  {country.population.toLocaleString("en-IN")}
                </span>
              </p>
              <p>
                <b>Region: </b>
                <span className="Region">{country.region}</span>
              </p>
              <p>
                <b>Sub Region: </b>
                <span className="subregion">{country.subregion}</span>
              </p>
              <p>
                <b>Capital: </b>
                <span className="Capital">{country.capital?.join(", ")}</span>
              </p>
            </div>

            <div className="right-p">
              <p>
                <b>Top Level Domain: </b>
                <span className="tld">{country.tld?.join(", ")}</span>
              </p>
              <p>
                <b>Currencies: </b>
                <span className="Currencies">
                  {Object.values(country.currencies || {})
                    .map((currency) => currency.name)
                    .join(", ")}
                </span>
              </p>
              <p>
                <b>Languages: </b>
                <span className="Languages">
                  {Object.values(country.languages || {}).join(", ")}
                </span>
              </p>
            </div>
          </div>

          <div className="border">
            <b>Border Countries: </b>&nbsp;
            {borders.length > 0
              ? borders.map((borderName) => (
                  <Link
                    key={borderName}
                    className="aaDark"
                    to={`/${encodeURIComponent(borderName)}`}
                  >
                    {borderName}
                  </Link>
                ))
              : "No borders"}
          </div>
        </div>
      </div>
    </main>
  );
}
