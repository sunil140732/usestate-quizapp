import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import TestSelection from './TestSelection'
import { Questions } from '../data/question'
import QaCard from './QaCard'
import QaResult from './QaResult'
import PrograssBar from './ScrollBar'
import LeaderBoard from './LeaderBoard'

const QuizApp = () => {
  const [selectCategory,setSelectCategory]=useState(null)
  const [currentQuestion,setCurrentQusetion]=useState(0)
  const [score,setScore]=useState(0)
  const [showSummary,setShowSummary]=useState(false)
  const [leaderBoard,setLeaderBoard]=useState(0)
  const navigate=useNavigate()

  // handling the selection category
  function handleselectCategory(category){
    setSelectCategory(category)
    setCurrentQusetion(0)
    setScore(0)
    setShowSummary(false)
  }

  console.log()
  // handling the answers
  function handleAnswer(selectedOption){

    // checking the correct answer
    let correctAnswer=Questions[selectCategory]?.[currentQuestion]?.answer
    if(selectedOption===correctAnswer)setScore(prev=>prev+1)   
      
    // // updating the Question
    if(currentQuestion<Questions[selectCategory].length-1){
      setCurrentQusetion(prev=>prev+1)
    }
    else{
      setShowSummary(true);
      const updatedLeaderBoard={
        ...leaderBoard,
        [selectCategory]:Math.max(score+1,leaderBoard[selectCategory]||0)
      }
      setLeaderBoard(updatedLeaderBoard)
      localStorage.setItem("leaderboard",JSON.stringify(updatedLeaderBoard))
    }
  }

  // function for retake
  function retakeQuiz(){
    setCurrentQusetion(0);
    setScore(0);
    setShowSummary(false);
  }

  // function for Quit
  function Quit(){
    setSelectCategory(null)
    setCurrentQusetion(0);
    setScore(0);
    setShowSummary(false);
  }

  function goOut(){
    navigate('/')
  }

  return (
    <div>
      <h1 className='text-center'>QuizApp</h1>
      {
        !selectCategory?(
        <TestSelection onselectCategory={handleselectCategory} />
        ):!showSummary?(
        <>
        <PrograssBar currentQuestion={currentQuestion} totalQuestion={Questions[selectCategory].length} />
        <QaCard
          questionData={Questions[selectCategory][currentQuestion]}
          questionNumber={currentQuestion+1}
          totalQuestion={Questions[selectCategory].length}
          handleAnswer={handleAnswer}
          quitQuiz={Quit}
        />
        <div className='d-flex justify-content-center my-3'>
          <button className='btn btn-success' onClick={goOut}>Go Out</button>
        </div>
        </>
        ):(
        <>
        <QaResult
        score={score}
        totalQuestion={Questions[selectCategory].length}
        quitQuiz={Quit}
        retakeQuiz={retakeQuiz}
        />
        {/* leaderboard section */}
        <LeaderBoard leaderBoard={leaderBoard}/>
        </>
        )
      }
    </div>
  )
}

export default QuizApp
