import React from "react";
import { NavLink } from "react-router-dom";
import Pricing from "./Pricing";
import Product from "./Product";

const Home = () => {
  return (
    <div className="home">
      <header className="hero-section my-5">
        <div className="container text-center pb-5">
          <h1 className="display-4 fw-bold">Welcome to For Fresher</h1>
          <p className="lead mt-3">
            Explore endless opportunities and elevate your skills with "For Fresher." Whether you're looking for the best jobs, learning resources, or career guidance, we've got you covered.
          </p>
          <div className="mt-4 flex-sm-row">
            <NavLink to="/jobseekers" className="btn btn-primary btn-lg mx-2 mb-3 mb-sm-0">
              Explore Jobs
            </NavLink>
            <NavLink to="/resources" className="btn btn-outline-primary btn-lg mx-2">
              Discover Resources
            </NavLink>
          </div>
        </div>
      </header>

      {/* image section */}
      <section className="container image-section  my-5">
        <div className="py-5">
          <img src="http://surl.li/esbjsw" alt="For Fresher" className="w-100" />
        </div>
      </section>
      
      {/* companie section */}
      <div className="bg-dark text-white py-5">
        <p className="d-flex justify-content-center display-4 fw-bold py-5 text-center">
          Join 1,000+ companies who hire with Fresher
        </p>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-6 justify-content-center mx-auto">
          <div className="company-logo text-center p-5">
            <img
              src="http://surl.li/swjwep"
              className="img-fluid"
              style={{ maxWidth: "50px", height: "50px" }}
            />
            <p className="mt-3">TCS</p>
          </div>
          <div className="company-logo text-center p-5">
            <img
              src="http://surl.li/dnsnha"
              className="img-fluid"
              style={{ maxWidth: "50px", height: "50px" }}
            />
            <p className="mt-3">Wipro</p>
          </div>
          <div className="company-logo text-center p-5">
            <img
              src="http://surl.li/bdldsk"
              className="img-fluid"
              style={{ maxWidth: "50px", height: "50px" }}
            />
            <p className="mt-3">HCL</p>
          </div>
          <div className="company-logo text-center p-5">
            <img
              src="http://surl.li/elukcb"
              className="img-fluid"
              style={{ maxWidth: "50px", height: "50px" }}
            />
            <p className="mt-3">IBM</p>
          </div>
          <div className="company-logo text-center p-5">
            <img
              src="http://surl.li/opskwf"
              className="img-fluid"
              style={{ maxWidth: "50px", height: "50px" }}
            />
            <p className="mt-3">Microsoft</p>
          </div>
          <div className="company-logo text-center p-5 ">
          
            <p className="mt-5">more...</p>
          </div>
        </div>
      </div>


      {/* key features */}

      <section className="features my-5">
        <div className="container py-5">
          <h2 className="text-center mb-4">Why Choose Us?</h2>
          <h2 className="text-center mb-4">Let their skills do the talking</h2>
          <p className="text-center mb-4">Our talent assessment goes deeper, evaluating skills, behavior, and culture add to make hiring less gut feeling. More great feeling.</p>
          <div className="row py-5">
            <div className="col-md-4 text-center">
              <img
                src="http://surl.li/vrnvqm"
                alt="Quality"
                className="mb-3 w-50 h-50"
              />
              <h5>400+ Tests</h5>
              <p>Predict job success with over 400 tests.</p>
            </div>
            <div className="col-md-4 text-center">
              <img
                src="http://surl.li/nurmtd"
                alt="Support"
                className="mb-3 w-50 h-50"
              />
              <h5>Ranked Shortlists</h5>
              <p>Handle thousands of applicants with ease.</p>
            </div>
            <div className="col-md-4 text-center">
              <img
                src="http://surl.li/lhatyj"
                alt="Opportunities"
                className="mb-3 w-50 h-50"
              />
              <h5>ATS Integrations</h5>
              <p>Create a seamless workflow with our ATS integrations.</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 text-center">
              <img
                src="http://surl.li/wppkcy"
                alt="Quality"
                className="mb-3 w-50 h-50"
              />
              <h5>Top-Notch Resources</h5>
              <p>We provide the best career-building tools to help you succeed in the job market.</p>
            </div>
            <div className="col-md-4 text-center">
              <img
                src="http://surl.li/rlfabb"
                alt="Support"
                className="mb-3 w-50 h-50"
              />
              <h5>Expert Guidance</h5>
              <p>Learn from industry professionals and mentors ready to guide you through your journey.</p>
            </div>
            <div className="col-md-4 text-center">
              <img
                src="http://surl.li/qlkgdb"
                alt="Opportunities"
                className="mb-3 w-50 h-50"
              />
              <h5>Endless Opportunities</h5>
              <p>Find internships, entry-level positions, and training tailored for freshers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* product section */}
      <section className="my-5">
        <Product />
      </section>

      {/* pricing section */}
      <section className="my-5">
        <Pricing />
      </section>

      <section className="cta-section py-5">
        <div className="container text-center">
          <h2 className="fw-bold">Ready to Kickstart Your Career?</h2>
          <p>Join thousands of freshers building their future with us.</p>
          <NavLink to="/quiz" className="btn btn-primary btn-lg">
            Take the Quiz
          </NavLink>
        </div>
      </section>
    </div>
  );
};

export default Home;

