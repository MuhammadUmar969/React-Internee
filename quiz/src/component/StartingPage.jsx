import React from "react";
import "./StartingPage.css";
import Card from "./Card";

const StartingPage = ({
  setShowStartingPage,
  setShowQuestionPage,
  topScore,
  username,
  setUsername,
}) => {
  const gameStart = () => {
    if (username.trim().length > 0) {
      setShowStartingPage(false);
      setShowQuestionPage(true);
    }
  };

  return (
    <>
      <Card>
        <h1 className="header">Welcome to Quiz Game!</h1>
        <h3 className="primary_text">Please enter your username.</h3>
        <input
          type="text"
          placeholder="Username"
          className="username_input"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button className="start_btn" onClick={gameStart}>
          Let's play
        </button>

        <p className="top_score">
          Top score: <span>{topScore}</span>
        </p>
      </Card>
    </>
  );
};

export default StartingPage;
