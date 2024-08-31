import React, { useEffect, useRef, useState } from "react";
import "./Quiz.css";
import { data } from "./data";
function Quiz() {
  let [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const answerRefs = useRef([]);
  useEffect(() => {
    setQuestion(data[index]);
    answerRefs.current.forEach((el) => {
      el.classList.remove("currect");
      el.classList.remove("wrong");
      setLock(false);
    });
  }, [index]);

  let [question, setQuestion] = useState(data[index]);
  let [lock, setLock] = useState(false);
  const checkAns = (e, ans) => {
    if (lock === false) {
      if (question.ans === ans) {
        setScore((pre) => pre + 1);
        answerRefs.current[ans - 1].classList.add("currect");
        setLock(true);
      } else {
        answerRefs.current[ans - 1].classList.add("wrong");
        setLock(true);
      }
    }
  };
  return (
    <div className="container">
      <h1>Quiz App</h1>
      <hr />
      <h2>
        {" "}
        {index + 1}.{question.question}
      </h2>
      <ul>
        <li
          ref={(el) => (answerRefs.current[0] = el)}
          onClick={(e) => {
            checkAns(e, 1);
          }}
        >
          {question.option1}
        </li>
        <li
          ref={(el) => (answerRefs.current[1] = el)}
          onClick={(e) => {
            checkAns(e, 2);
          }}
        >
          {question.option2}
        </li>
        <li
          ref={(el) => (answerRefs.current[2] = el)}
          onClick={(e) => {
            checkAns(e, 3);
          }}
        >
          {question.option3}
        </li>
        <li
          ref={(el) => (answerRefs.current[3] = el)}
          onClick={(e) => {
            checkAns(e, 4);
          }}
        >
          {question.option4}
        </li>
      </ul>
      <button
        onClick={() =>
          setIndex((pre) => (lock ? (data[pre + 1] ? pre + 1 : pre) : pre))
        }
      >
        Next
      </button>
      <div className="index">
        {score} out 0f {data.length}
      </div>
      <div className="index">
        {index + 1} 0f {data.length}
      </div>
    </div>
  );
}

export default Quiz;
