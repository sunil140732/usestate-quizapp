import React from 'react'

import { useNavigate, NavLink } from 'react-router-dom'



const Navbar = () => {
  const navigate=useNavigate();
  // Navigate to the QuizApp page
  function handleQuizClick () {
    navigate('/quiz'); 
  };

  function handleLoginClick () {
    navigate('/login'); 
  };

  function handleRegisterClick () {
    navigate('/register'); 
  };

  return (
    <div>
    {/* Navbar */}
    <nav className="navbar navbar-expand-lg shadow">
      <div className="container p-4">
        <NavLink className="navbar-brand text-success fw-bold fs-4" to='/'><span className='text-danger fw-bold fs-4'>For</span> Fresher</NavLink>
        <button 
        className="navbar-toggler" 
        type="button" 
        data-bs-toggle="collapse" 
        data-bs-target="#navbarText" 
        aria-controls="navbarText" 
        aria-expanded="false" 
        aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse mx-5" id="navbarText">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link active fw-bold" aria-current="page" to='/'>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link fw-bold" to='/product'>Product</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link fw-bold" to='/pricing'>Pricing</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link fw-bold" to='/resources'>Resources</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link fw-bold" to='/jobseekers'>JobSeekers</NavLink>
            </li>
          </ul>
          
          <div className='d-flex gap-3'>
            <button className='btn btn-outline-primary' onClick={handleQuizClick}>Try Quiz</button>
            <button className='btn btn-outline-success' onClick={handleLoginClick}>Login</button>
            <button className='btn btn-primary' onClick={handleRegisterClick}>Register</button>
          </div>
        </div>
      </div>
  </nav>
  </div>
  )
}

export default Navbar
