import React from "react";
import "./ContentHeader.css";

const ContentHeader: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <header className="content-header">
      <>
        <button onClick={() => scrollToSection("c#")} className="header-button">
          <h1>Mi a C#?</h1>
        </button>
        <button
          onClick={() => scrollToSection("lang")}
          className="header-button"
        >
          <h1>Nyelvi jellemzők</h1>
        </button>

        <button
          onClick={() => scrollToSection("oop")}
          className="header-button"
        >
          <h1>OOP és Osztályok</h1>
        </button>

        <button
          onClick={() => scrollToSection("asp")}
          className="header-button"
        >
          <h1>ASP.Net és Webfejlesztés</h1>
        </button>
        <button
          onClick={() => scrollToSection("end")}
          className="header-button"
        >
          <h1>Végszó</h1>
        </button>
      </>
    </header>
  );
};

export default ContentHeader;
