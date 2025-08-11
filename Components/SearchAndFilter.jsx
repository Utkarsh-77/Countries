import { useState } from "react";
import "../style.css";

export default function SearchAndFilter({ setQuery, setRegion }) {
  return (
    <>
      <div className="easy-div">
        <div className="search-div">
          <i className="fa fa-search"></i>
          <input
            onChange={(e) => {
              setQuery(e.target.value);
            }}
            type="text"
            className="search-input"
            placeholder="Search for a country..."
          />
        </div>

        <div className="reason-div">
          <select
            name="filter"
            className="region-filter"
            onChange={(e) => setRegion(e.target.value)}
          >
            <option hidden="">Filter By Region</option>
            <option value="">All</option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
      </div>
    </>
  );
}
