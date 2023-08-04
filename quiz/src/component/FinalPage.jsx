import React from "react";
import "./FinalPage.css";
import Card from "./Card";

const FinalPage = ({
  score,
  topScore,
  setTopScore,
  setShowStartingPage,
  setShowFinalPage,
  setScore,
  username,
  setUsername,
}) => {
  const handleClick = () => {
    if(score > topScore){
      setTopScore(score);
    }
    setShowFinalPage(false);
    setShowStartingPage(true);
    setScore(0);
    setUsername("");
  }
  return (
    <>
      <Card>
        <h1 className="heading">You reached the end of the game,{username}!</h1>

        <h3 className="primary_text">Your final score is:</h3>

        <h3 className="final_score">{score}</h3>

        <button className="play_again_btn" onClick={handleClick}>Play Again</button>
      </Card>
    </>
  );
};

export default FinalPage;
