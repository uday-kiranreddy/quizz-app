import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../Context/Context";
import { Button } from "@mui/material";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
function QuestionComponent() {
  const { questions, incorrectAnswers, nextQuestion,index,clickedOption,clickedCorrectOption} = useGlobalContext();

  return (
    <div className=" flex flex-col w-80 mt-[10%] mx-auto  space-y-2">
      <h2 className="font-semibold"><span className="font-bold">{index==0?"1":index+1}) </span>{questions.question}</h2>
      <Button onClick={(e)=>clickedCorrectOption(e)} style={{width:"295px"}}variant="contained">{questions.correct_answer}</Button>
      {incorrectAnswers.map((item, index) => {
        return (
          <div key={index}>
            <Button  onClick={(e)=>clickedOption(e)}  style={{width:"295px"}}variant="contained">{item}</Button>
          </div>
        );
      })}
      <Button onClick={nextQuestion} style={{width:"295px",marginTop:"2rem", backgroundColor: "yellow" }}>
        Next Question <ArrowRightAltIcon/>
      </Button>
    </div>
  );
}

export default QuestionComponent;
