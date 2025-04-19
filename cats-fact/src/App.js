import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styles.css";

const App = () => {
    const [fact, setFact] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    const fetchCatData = async () => {
        try {
            const factRes = await axios.get("https://catfact.ninja/fact");
            setFact(factRes.data.fact);

            // Рандомная картинка кота
            setImageUrl(`https://cataas.com/cat?${Date.now()}`);
        } catch (error) {
            console.error("Ошибка при загрузке данных:", error);
            setFact("Не удалось загрузить факт о коте 🐱");
            setImageUrl("");
        }
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
