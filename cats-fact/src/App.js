import React, { useEffect, useState } from "react";
import "./styles.css";

const App = () => {
  const [fact, setFact] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const fetchCatData = async () => {
    const factRes = await fetch("https://catfact.ninja/fact");
    const factData = await factRes.json();
    setFact(factData.fact);

    // Рандомная картинка кота
    setImageUrl(`https://cataas.com/cat?${Date.now()}`);
  };

  useEffect(() => {
    fetchCatData();
  }, []);

  return (
      <div className="app">
        <h1>🐱 Random Cat Fact & Image</h1>
        {imageUrl && <img src={imageUrl} alt="Random Cat" className="cat-image" />}
        <p className="fact">{fact}</p>
        <button onClick={fetchCatData}>😺 New Cat!</button>
      </div>
  );
};

export default App;
