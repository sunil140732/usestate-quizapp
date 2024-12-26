import React, { useState } from 'react'

import { useNavigate, NavLink } from 'react-router-dom'



const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate=useNavigate();

  function toggleMenu(){
    setIsMenuOpen(!isMenuOpen)
  }

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
          onClick={toggleMenu}
          aria-controls="navbarNav" 
          aria-expanded={isMenuOpen? "true":"false"}
          aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${isMenuOpen?"show":""}`} id="navbarNav">
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
