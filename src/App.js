import React, { useState } from "react";
import "./styles.css";

// import "./condition";
// import condition from "./condition";

var emojiDictonary = {
  "😂": "Face with Tears of Joy",
  "😃": "Grinning Face with Big Eyes",
  "😄": "Grinning Face with Smiling Eyes",

  "😆": "Grinning Squinting Face",
  "😅": "Grinning Face with Sweat",
  "😁": "Beaming Face with Smiling Eyes",

  "🙂": "Slightly Smiling Face",
  "🙃": "Upside-Down Face",

  "😇": "Smiling Face with Hallo",
  "🥰": "Smiling Face with Hearts",
  "🙌": "Raising Hands",
  "😊": "Smiling Face with Smiling Eyes",
  "🙊": "Speak-No-Evil Monkey",
  "💔": "Broken Heart",
  "🤦": "Person Facepalming",
  "🤡": "Clown Face",
  "😲": "Astonished Face",
  "🧐": "Face with Monocle"
};
var emojiWeKnow = Object.keys(emojiDictonary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictonary[userInput];

    if (meaning === undefined) {
      meaning = "Sorry! The Emoji is not in our Database";
    }

    setMeaning(meaning);
  }
  function emojiClickHandler(emoji) {
    var meaning = emojiDictonary[emoji];
    setMeaning(meaning);
  }

  return (
    <>
      <div className="App">
        <header class="header">
          {" "}
          <h1 class="heading">Start The Emoji Shower</h1>{" "}
        </header>

        <input onChange={emojiInputHandler} />
        <h2>Description - {meaning}</h2>

        <h3>Click to know the meaning</h3>
        {emojiWeKnow.map(function (emoji) {
          return (
            <span
              onClick={() => emojiClickHandler(emoji)}
              style={{
                fontSize: "2rem",
                padding: "3rem",
                cursor: "pointer",
                paddingLeft: "5rem",
                margin: "3rem"
              }}
              key={emoji}
            >
              {emoji}
            </span>
          );
        })}
        <footer class="footer">
          <div class="footer-header">
            Here is my Social Media Links To connect
          </div>
          <ul class="social links list-non-bullet">
            <li class="list-item-inline">
              <a class="link" href="https://github.com/Rohan-154">
                <i class="fab fa-github-square fa-2x" target="_blank"></i>
              </a>
            </li>
            <li class="list-item-inline">
              <a class="link" href="https://twitter.com/Rohan_415?s=09">
                <i class="fab fa-twitter-square fa-2x"></i>
              </a>
            </li>
            <li class="list-item-inline">
              <a
                class="link"
                href="https://www.linkedin.com/in/rohan-dubey-2854b9201"
              >
                <i class="fab fa-linkedin fa-2x"></i>
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </>
  );
}
