import React from 'react'
import { Questions } from '../data/question'

const TestSelection = ({onselectCategory}) => {
    // hardcoded values to test
    // let categories=['HTML','CSS','BootStrap','JavaScript']
    // accessing the values dynamically
    let categories = Object.keys(Questions)
    
  return (
    <div className='container'>
        <h2 className='text-center '>Take the Test to Ace Interviews</h2>
        <div className='card p-4 shadow'>
            <div className="d-flex justify-content-center">
                {
                    categories.map((sub)=>(
                        <button key={sub} className='btn btn-success mx-2' onClick={()=>onselectCategory(sub)}>{sub}</button>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default TestSelection
