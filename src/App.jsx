import React from 'react'
// import TestSelection from './components/TestSelection'
import { Routes,Route,useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Product from './pages/Product'
import Pricing from './pages/Pricing'
import Resources from './pages/Resources'
import JobSeekers from './pages/JobSeekers'
import QuizApp from './components/QuizApp'
import PageNotFound from './pages/PageNotFound'
import Footer from './pages/Footer'
import Login from './components/login'
import Register from './components/register'


const App = () => {
  const location=useLocation();

  
  const hideNavbarAndFooter=['/login','/register','/quiz']
  const shouldHideNavbarAndFooter=hideNavbarAndFooter.includes(location.pathname);

  return (
    <>
    {/* conditionally render Navbar */}
      {!shouldHideNavbarAndFooter && <Navbar />}
      
      
      
      {/* routing setup start */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/pricing' element={<Pricing/>}/>
        <Route path='/resources' element={<Resources/>}/>
        <Route path='/jobseekers' element={<JobSeekers/>}/>
        <Route path='/quiz' element={<QuizApp/>}/>
        <Route path='*' element={<PageNotFound/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
      {/* routing setup end */}
      {/* conditionally render  Footer */}
      {!shouldHideNavbarAndFooter && <Footer/>}
      
    </>
    
  )
}


export default App
