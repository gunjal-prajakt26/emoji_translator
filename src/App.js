import { useState } from "react";
import "./styles.css";

export default function App() {
  var emojiDictionary = {
    "😀": "Smile",
    "😑": "annoyance",
    "🥴": "Drunk",
    "🥰": "In Love",
    "🥺": "Pleading",
    "🥡": "takeout box",
    "❤️": "love",
    "😆": "Laughing",
    "😇": "Innocent",
    "😘": "Kissing heart",
    "😋": "Yum",
    "😐️": "Neutral face",
    "🙃": "Expressionless",
    "😶": "No mouth",
    "😴": "Sleeping face",
    "🔥": "Fire"
  };
  var emojiWeKnow = Object.keys(emojiDictionary);
  var [meaning, setMeaning] = useState("");

  function emojiHandler(event) {
    var userINput = event.target.value;
    var meaning = emojiDictionary[userINput];
    if (meaning === undefined) {
      meaning = "we don't have this in our database";
    }
    setMeaning(meaning);
  }
  function emojiClickHandler(abc) {
    var meaning = emojiDictionary[abc];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Emoji translator</h1>
      <input onChange={emojiHandler} />
      <h2>{meaning}</h2>
      <br />
      <h3>We have emojis: </h3>
      {emojiWeKnow.map(function (item) {
        return (
          <span onClick={() => emojiClickHandler(item)} key={item}>
            {item}
          </span>
        );
      })}
    </div>
  );
}
