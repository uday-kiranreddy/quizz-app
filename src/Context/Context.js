import React, { useContext, useState, useEffect } from "react";
import { createContext } from "react";

const AppContext = createContext();

function Context({ children }) {
  const URL =
    "https://opentdb.com/api.php?amount=10&difficulty=medium&type=multiple";

  //main questions array
  const [questions, setQuestions] = useState({});
  //index
  const [index, setIndex] = useState(0);

  //incorrect answwers array
  const [incorrectAnswers, setIncorrectAnswers] = useState([]);

  //oading state
  const [loading, setLoading] = useState(false);

  //data length
  const [questionsLength, setQuestionsLength] = useState({
    totalQuestions: "",
    questionsOver: index + 1,
    questionsAnswered: "",
  });

  //result modal state
  const [finished, setFinished] = useState(false);

  //next question
  const nextQuestion = () => {
    if (index.length >= 2) {
      alert("end of questions");
    } else {
      setIndex(index + 1);
    }
  };

  //fetch questions
  const fetchQuestions = async () => {
    setLoading(true);
    const response = await fetch(URL);
    const data = await response.json();
    setQuestionsLength({
      totalQuestions: data.results.length,
      questionsOver: index + 1,
    });
    setQuestions(data.results[index]);
    setIncorrectAnswers(data.results[index].incorrect_answers);
    setLoading(false);
  };

  //useEffect
  useEffect(() => {
    if (index == 10) {
      setIndex(0);
      setIncorrectAnswers([]);
      setFinished(true);
      setQuestionComponent(false);
      setLoading(false);
    }
    fetchQuestions();

  }, [index]);

  //starting form
  const [waiting, setWaiting] = useState(true);

  //main question component state
  const [questionComponent, setQuestionComponent] = useState(false);

  //correct answer
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
  //start quiz btn
  const startQuiz = () => {
    setWaiting(false);
    setLoading(true);
    fetchQuestions();
    setQuestionComponent(true);
    setLoading(false);
  };

  //on clicking answers btn
  const clickedOption = (e) => {
    setIndex(index + 1);
    setQuestionsLength({
      questionsOver: index + 1,
    });
  };
  const clickedCorrectOption = (e) => {
    setIndex(index + 1);
    setQuestionsLength({
      questionsOver: index + 1,
    });
    setCorrectAnswersCount(correctAnswersCount + 1);
  };
  //retry
  const retry = () => {
    setWaiting(true);
    setFinished(false);
    setCorrectAnswersCount(0);
  };
  return (
    <AppContext.Provider
      value={{
        questions,
        incorrectAnswers,
        nextQuestion,
        loading,
        waiting,
        questionComponent,
        startQuiz,
        index,
        questionsLength,
        clickedOption,
        finished,
        retry,
        clickedCorrectOption,
        correctAnswersCount
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export default Context;
