import React, { useState } from 'react'
import StartingPage from './component/StartingPage'
import QuestionPage from './component/QuestionPage'
import FinalPage from './component/FinalPage'

const App = () => {

  const [username , setUsername] = useState("");

  const [score , setScore] = useState(0);
  const [topScore , setTopScore] = useState(0);

  const [showStartingPage , setShowStartingPage] = useState(true);
  const [showQuestionPage , setShowQuestionPage] = useState(false);
  const [showFinalPage , setShowFinalPage] = useState(false);

  return (
    <>
      {showStartingPage && <StartingPage 
        setShowStartingPage={setShowStartingPage}
        setShowQuestionPage={setShowQuestionPage}
        topScore={topScore}
        username={username}
        setUsername={setUsername}
      />}

      {showQuestionPage && <QuestionPage 
        score={score}
        setScore={setScore}
        setShowQuestionPage={setShowQuestionPage}
        setShowFinalPage={setShowFinalPage}
      />}

      {showFinalPage && <FinalPage 
        score={score}
        topScore={topScore}
        setTopScore={setTopScore}
        setShowStartingPage={setShowStartingPage}
        setShowFinalPage={setShowFinalPage}
        setScore={setScore}
        username={username}
        setUsername={setUsername}
      />}
    </>
  )
}

export default App
