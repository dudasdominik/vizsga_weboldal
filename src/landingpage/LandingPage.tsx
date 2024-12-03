import React from "react";
import "./landingpage.css";

interface LandingPageProps {
  onButtonClick: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onButtonClick }) => {
  return (
    <header id="landing-header">
      <h1>C# és ASP.NET: Modern Webfejlesztés Alapjai</h1>
      <h2>
        Tanuld meg az alapokat, fedezd fel az objektumorientált programozást, és
        merülj el az ASP.NET webfejlesztés világában!
      </h2>
      <button onClick={onButtonClick} className="next-button">
        Kezdés
      </button>
    </header>
  );
};

export default LandingPage;
