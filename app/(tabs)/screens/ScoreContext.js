// ScoreContext.js
import React, { createContext, useState } from 'react';

export const ScoreContext = createContext();

export const ScoreProvider = ({ children }) => {
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState(0);

  const incrementCorrect = () => setCorrectAnswers(correctAnswers + 1);
  const incrementIncorrect = () => setIncorrectAnswers(incorrectAnswers + 1);

  const resetScore1 = () => setCorrectAnswers(0);
  const resetScore2 = () => setIncorrectAnswers(0);

  return (
    <ScoreContext.Provider value={{ correctAnswers, incorrectAnswers, incrementCorrect, incrementIncorrect, resetScore1, resetScore2 }}>
      {children}
    </ScoreContext.Provider>
  );
};