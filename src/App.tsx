import { useState } from "react";

import "./App.css";
import LandingPage from "./landingpage/LandingPage";
import WhatsCSharp from "./whatscsharp/WhatsCSharp";
import ContentHeader from "./header/ContentHeader";

function App() {
  const [changeSite, setChangeSite] = useState(true);

  const handleClick = () => {
    setChangeSite(!changeSite);
  };

  if (changeSite) {
    return <LandingPage onButtonClick={handleClick} />;
  } else {
    return (
      <>
        <ContentHeader />
        <div className="content-container">
          <div style={{ height: "8px", backgroundColor: "black" }}></div>
          <br />
          <WhatsCSharp />
        </div>
      </>
    );
  }
}

export default App;
