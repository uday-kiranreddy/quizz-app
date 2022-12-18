import React from "react";
import WaitingComponent from './WaitingComponent'
import QuestionComponent from "./QuestionComponent";
import TransitionsModal from "./TransitionsModal";
import { useGlobalContext } from "../Context/Context";

function QuizzApp() {
    const { loading, waiting, questionComponent, questionsLength,finished } =
    useGlobalContext();
  return (
    <>
      {!waiting ? (
        <span className="flex justify-end p-2 bg-blue-200 text-white font-bold pr-7">
          Question:{questionsLength.questionsOver}/10
        </span>
      ) : (
        ""
      )}
      {loading ? <div className="spinner"></div> : ""}
      {waiting ? <WaitingComponent /> : ""}
      {questionComponent ? <QuestionComponent /> : ""}
      {finished ? <TransitionsModal /> : ""}
    </>
  );
}

export default QuizzApp;
