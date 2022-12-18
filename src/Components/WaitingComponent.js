import React from "react";
import { Button } from "@mui/material";
import { useGlobalContext } from "../Context/Context";
function WaitingComponent() {
  const {startQuiz}=useGlobalContext();
  return (
    <>
      <div className="flex justify-center align-middle h-[100%] ">
        <form type="submit">
          <div className="flex flex-col mt-[50%] space-y-3 w-80 bg-white p-5 rounded-md">
            <h1
              className="font-bold tracking-wider"
              style={{ fontSize: "1.7rem" }}
            >
              Quizzz
            </h1>
            <label className=" font-medium" htmlFor="Questions">
              Number Of Questions:
            </label>
            <input
              className="border bg-blue-50 rounded-md  p-1"
              type="text"
              placeholder="Number of Questions"
              value="10"
            />
            <label className=" font-medium" htmlFor="Category">
              Category:
            </label>
            <select
              className="border bg-blue-50 rounded-md  p-1"
              name="Choose Difficulty"
              id="difficulty"
            >
              <option value="easy">Sports</option>
              <option value="medium">Cinema</option>
              <option value="Difficult">Music</option>
            </select>

            <label className=" font-medium" htmlFor="Questions">
              Difficulty level:
            </label>
            <select
              className="border bg-blue-50 rounded-md  p-1"
              name="Choose Difficulty"
              id="difficulty"
            >
              <option value="easy">easy</option>
              <option value="medium">medium</option>
              <option value="Difficult">Difficult</option>
            </select>
            <Button onClick={startQuiz} style={{ backgroundColor: "Yellow", color: "black" }}>
              Start Quiz
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}

export default WaitingComponent;
