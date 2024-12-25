import React from 'react'
import Confetti from 'react-confetti'
import { useNavigate } from 'react-router-dom'


const QaResult = ({score,totalQuestion,quitQuiz,retakeQuiz}) => {
  // console.log(score,totalQuestion)
  const navigate=useNavigate();

  let isHighscore=score==totalQuestion;

  function goOut(){
    navigate('/')
  }
  
  return (
    <div className='text-center mt-5'>
      {isHighscore&& <Confetti recycle={false} numberOfPieces={1000} />}
      {/* displaying the quiz completed */}
      <h2 className='text-center'>Quiz Completed</h2>
      {/* displaying the score */}
      <p className='text-center'>Score: <strong>{score}/totalQuestion</strong></p>
      {/* displaying the buttons to retake or Quit */}
      <div className="result-buttons d-flex justify-content-center my-2">
        <button className='btn btn-success mx-2' onClick={retakeQuiz}>Retake</button>
        <button className='btn btn-danger mx-2' onClick={quitQuiz}>Quit</button>
        {/* GO Out Button */}
        <button className='btn btn-info mx-2' onClick={goOut}>Go Out</button>
      </div>
    </div>
  )
}

export default QaResult
