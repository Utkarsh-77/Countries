import React from "react";
import { Link } from "react-router-dom";

export default function AddCountryCard({
  id,
  name,
  region,
  flag,
  population,
  capital,
}) {
  return (
    <Link
      className="ancor-card"
      key={id}
      to={`/${encodeURIComponent(name)}`} // Dynamic country name
    >
      <div className="box">
        <div className="flag-box">
          <img src={flag} alt={`${name} Flag`} /> {/*  Dynamic alt */}
        </div>
        <div className="text-details">
          <h3>{name}</h3>
          <p className="text-details-p">
            Population: <span>{population}</span>
          </p>
          <p className="text-details-p">
            Region: <span>{region}</span>
          </p>
          <p className="text-details-p">
            Capital: <span>{capital}</span>
          </p>
        </div>
      </div>
    </Link>
  );
}
