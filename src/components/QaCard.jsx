import React from 'react'

const QaCard = ({questionData,questionNumber,totalQuestion,handleAnswer,quitQuiz}) => {
  // console.log(questionData,questionNumber,totalQuestion,handleAnswer)
  return (
    <div className='card shadow my-2 mx-2 p-3'>
      {/* header section start */}
      <div className='card-header d-flex justify-content-between p-2 bg-primary text-white fw-bold'>
        <h6>
          Total Questions : {questionNumber} of {totalQuestion}
        </h6>
        {/* button to quit the Quiz */}
        <button 
        className='btn btn-danger' 
        onClick={quitQuiz}>
          Quit
        </button>
      </div>
      {/* header section end */}
      {/* card-body-start */}
      <div className='card-body'>
        {/* questions */}
        <p className='text-danger fw-bold'>{questionData?.question}</p>
        {/* options start */}
        <div className='d-flex flex-column gap-3'>
          {
            questionData?.options.map(option=>(
              <button className='btn btn-outline-primary'
              key={option} 
              onClick={()=>handleAnswer(option)}
              >
                {option}
              </button>
            ))
          }
        </div>
        {/* options end */}
      </div>
      {/* card-body-end */}
      
    </div>
  )
}

export default QaCard
