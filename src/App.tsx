import { useState } from "react";
import "./App.css";
import ridhi1 from "./assets/ridhi1.JPG"
import ridhi2 from "./assets/ridhi2.JPG"

const phases = [
  "No",
  "Are you sure?",
  "Really sure?",
  "Think again!",
  "Last chance!",
  "Surely not?",
  "You might regret this!",
  "Give it another thought!",
  "Are you absolutely certain?",
  "This could be a mistake!",
  "Have a heart!",
  "Don't be so cold!",
  "Change of heart?",
  "Wouldn't you reconsider?",
  "Is that your final answer?",
  "You're breaking my heart ;(",
];

function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  function handleNoClick() {
    setNoCount(noCount + 1);
  }

  function getNoButtonText() {
    return phases[Math.min(noCount, phases.length - 1)];
  }

  return (
    <div className="valentine-container">
      {yesPressed ? (
        <>
          <img
            className="bear-kissing"
            alt="bears kissing"
            src={ridhi2}
          />
          <div className="text1">YAYYYYY!!!</div>
          <p className="text4">
            To my favorite-st person in the world, <br />
            <br />
            I love you to the end of the multiverse and back. Thought I'd
            show you much I love you through "code". I hoped you liked it
            because it's now part of my resume projects. <br />
            <br />
            "So tell me about a project you're proud" <br />
            "I had to ask my girlfriend to be my valentine and had to make sure
            saying NO was not an option"
            <br />
            "YOU'RE HIRED!"
            <br />
            <br />I believe this is my seventh year with you as my valentine and
            yus, I am truly honored. Thank you for being my best friend, my
            partner in crime, and the love of my life. I love you more than you
            love me.
            <br />
            <br />
            Love,
            <br />
            Your Ron
          </p>
        </>
      ) : (
        <>
          <img
            className="bear-heart"
            alt="bear with hearts"
            src={ridhi1}
          />
          <div className="text1">Dawu, will you be my Valentine?</div>
          <div className="text3">
            (Try saying no, I dare you. No, but actually try it hehe.)
          </div>
          <div>
            <button
              className="yesButton"
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button onClick={handleNoClick} className="noButton">
              {getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
