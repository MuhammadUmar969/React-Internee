import React, { useState, useEffect } from "react";
import "./Question.css";
import Card from "./Card";

const Question = ({
  questionIndex,
  setQuestionIndex,
  questions,
  setShowQuestionPage,
  setShowFinalPage,
  score,
  setScore,
}) => {
  const [timer, setTimer] = useState(15);
  const [timerRunning, setTimerRunning] = useState(false);
  const [answered, setAnswered] = useState(false); 

  useEffect(() => {
    if (timerRunning) {
      const timerId = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);

      return () => clearInterval(timerId);
    }
  }, [timerRunning, timer]);

  useEffect(() => {
    setTimer(15);
    setTimerRunning(true);
    setAnswered(false); 

    return () => setTimerRunning(false);
  }, [questionIndex]);

  useEffect(() => {
    if (timer === 0 && timerRunning && !answered) {
      setTimerRunning(false);
      handleNextQuestion();
    }
  }, [timer, timerRunning, answered]);

  const handleNextQuestion = () => {
    setAnswered(true); 
    setTimeout(() => {
      setQuestionIndex((prevIndex) => prevIndex + 1);
      setTimerRunning(true);
    }, 1000);
  };

  const handleClick = (isCorrect) => {
    if (questionIndex < 9) {
      if (isCorrect) {
        setScore((score) => score + 100);
      }

      setAnswered(true); 
      handleNextQuestion();
    } else {
      if (isCorrect) {
        setScore((score) => score + 100);
      }

      setShowQuestionPage(false);
      setShowFinalPage(true);
    }
  };

  return (
    <>
      <Card>
        <div className="timer-container">
          <p className="timer">Time left: {timer} seconds</p>
        </div>

        <h1 className="question">{questions[questionIndex].questionText}</h1>
        <div className="answers">
          {questions[questionIndex].answers.map((answer, i) => (
            <div
              key={i}
              className="answer"
              onClick={() => handleClick(answer.correctAnswer)}
            >
              <p>{answer.answerText}</p>
            </div>
          ))}
        </div>
        <p className="score">Score: {score}</p>
        <p className="question_number">
          Question <span>{questionIndex + 1}</span>/10
        </p>
      </Card>
    </>
  );
};

export default Question;
