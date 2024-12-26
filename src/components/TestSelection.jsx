import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Questions } from '../data/question'

const TestSelection = ({onselectCategory}) => {
    const navigate=useNavigate()
    // hardcoded values to test
    // let categories=['HTML','CSS','BootStrap','JavaScript']

    // accessing the values dynamically
    let categories = Object.keys(Questions)
    
  return (
    <div className='container py-4'>
        <h2 className='text-center mb-4'>Take the Test to Ace Interviews</h2>
        <div className='card p-4 shadow'>
            <div className="row gy-3 ">
                {
                    categories.map((sub)=>(
                        <div className='col-12 col-md-6 col-lg-3 text-center' key={sub}>
                            <button 
                            className='btn btn-success w-100' 
                            onClick={()=>onselectCategory(sub)}
                            >
                                {sub}
                            </button>
                        </div>
                    ))
                }
                {/* "Go to Home" Button */}
                <div className="text-center mb-4">
                    <button
                        className="btn btn-outline-primary"
                        onClick={() => navigate('/')}
                    >
                        Go to Home
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TestSelection
