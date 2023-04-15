import React, { useEffect, useRef, useState } from "react";
import emojiData from "./resources/emojiData.json";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");
  const [emojis, setEmojis] = useState([]);
  const [currentEmoji, setCurrentEmoji] = useState();

  const inputRef = useRef();

  const handleSelect = (emoji) => {
    setCurrentEmoji(emoji);
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  useEffect(() => {
    const newEmojis = emojiData.filter((emoji) =>
      emoji.title.toLowerCase().includes(search.toLocaleLowerCase())
    );
    setEmojis(newEmojis);
  }, [search]);

  return (
    <div className="App">
      <div className="heading_section">
        <h1>Search Emojis...</h1>
      </div>

      <div className="input_section">
        <input
          ref={inputRef}
          type="text"
          placeholder="search"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        {currentEmoji ? (
          <div className="selected_section">
            <p>selected emoji is</p>
            <div>
              {currentEmoji.title} {currentEmoji.symbol}
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>

      <div className="emoji_list">
        {emojis.map((emoji) => (
          <div>
            <h2 key={emoji.title} onClick={(e) => handleSelect(emoji)}>
              {emoji.title} {emoji.symbol}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
