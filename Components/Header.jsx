import { useState, useEffect } from "react";
import "../style.css";

export default function Header() {
  const [isDark, setIsDark] = useState(
    localStorage.getItem("Darkmode") === "true"
  );

  useEffect(() => {
    document.body.classList.toggle("dark-mode", isDark);

    const countryName = document.querySelector(".country-name");
    if (countryName) {
      countryName.classList.toggle("pDark", isDark);
    }

    const backBtn = document.querySelector(".back-btn");
    if (backBtn) {
      backBtn.classList.toggle("dark", isDark);
    }

    const anchors = document.querySelectorAll(".aaDark");
    anchors.forEach((el) => el.classList.toggle("aDark", isDark));

    localStorage.setItem("Darkmode", isDark);
  }, [isDark]);

  const toggleDarkMode = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <header className={isDark ? "Dark-header" : ""}>
      <div className="header-container">
        <h2>
          <a className="Ahead" href="/">
            Where in the world?
          </a>
        </h2>
        <p
          className="Dark-Mode-Toggle"
          onClick={toggleDarkMode}
          style={{ cursor: "pointer" }}
        >
          <i
            className={`fa-solid ${isDark ? "fa-sun" : "fa-moon"}`}
            style={{
              fontSize: "18px",
              transition: "color 0.3s ease, transform 0.3s ease",
              transform: isDark ? "rotate(360deg)" : "rotate(0deg)",
              color: isDark ? "#fdd835" : "#555",
            }}
          ></i>
          &nbsp;
          <span>{isDark ? "Light Mode" : "Dark Mode"}</span>
        </p>
      </div>
    </header>
  );
}
