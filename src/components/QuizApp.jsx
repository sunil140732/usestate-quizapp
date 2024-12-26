import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TestSelection from "./TestSelection";
import { Questions } from "../data/question";
import QaCard from "./QaCard";
import QaResult from "./QaResult";
import PrograssBar from "./ScrollBar";
import LeaderBoard from "./LeaderBoard";

const QuizApp = () => {
  const [selectCategory, setSelectCategory] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showSummary, setShowSummary] = useState(false);
  const [leaderBoard, setLeaderBoard] = useState(0);
  const navigate = useNavigate();

  // Handling the selection category
  function handleSelectCategory(category) {
    setSelectCategory(category);
    setCurrentQuestion(0);
    setScore(0);
    setShowSummary(false);
  }

  // Handling the answers
  function handleAnswer(selectedOption) {
    let correctAnswer = Questions[selectCategory]?.[currentQuestion]?.answer;
    if (selectedOption === correctAnswer) setScore((prev) => prev + 1);

    if (currentQuestion < Questions[selectCategory].length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setShowSummary(true);
      const updatedLeaderBoard = {
        ...leaderBoard,
        [selectCategory]: Math.max(score + 1, leaderBoard[selectCategory] || 0),
      };
      setLeaderBoard(updatedLeaderBoard);
      localStorage.setItem("leaderboard", JSON.stringify(updatedLeaderBoard));
    }
  }

  // Function for retake
  function retakeQuiz() {
    setCurrentQuestion(0);
    setScore(0);
    setShowSummary(false);
  }

  // Function for Quit
  function quitQuiz() {
    setSelectCategory(null);
    setCurrentQuestion(0);
    setScore(0);
    setShowSummary(false);
  }

  function goOut() {
    navigate("/");
  }

  return (
    <div className="container py-4">
      <h1 className="text-center mb-4">QuizApp</h1>
      <div className="row">
        {selectCategory ? (
          !showSummary ? (
            <>
              {/* Progress Bar */}
              <div className="col-12">
                <PrograssBar
                  currentQuestion={currentQuestion}
                  totalQuestion={Questions[selectCategory].length}
                />
              </div>

              {/* QA Card */}
              <div className="col-md-8 mx-auto my-4">
                <QaCard
                  questionData={Questions[selectCategory][currentQuestion]}
                  questionNumber={currentQuestion + 1}
                  totalQuestion={Questions[selectCategory].length}
                  handleAnswer={handleAnswer}
                  quitQuiz={quitQuiz}
                />
              </div>

              {/* Button to Go Out */}
              <div className="col-12 text-center my-3">
                <button className="btn btn-success" onClick={goOut}>
                  Go Out
                </button>
              </div>
            </>
          ) : (
            <>
              {/* QA Result */}
              <div className="col-md-8 mx-auto my-4">
                <QaResult
                  score={score}
                  totalQuestion={Questions[selectCategory].length}
                  quitQuiz={quitQuiz}
                  retakeQuiz={retakeQuiz}
                />
              </div>

              {/* Leaderboard Section */}
              <div className="col-12">
                <LeaderBoard leaderBoard={leaderBoard} />
              </div>
            </>
          )
        ) : (
          <div className="col-md-6 mx-auto">
            <TestSelection onselectCategory={handleSelectCategory} />
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizApp;
