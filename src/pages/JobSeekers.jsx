import React from "react";

const Product = () => {
  const jobs = [
    {
      id: 1,
      title: "Software Developer - Fresher",
      company: "TCS",
      location: "Bangalore, India",
      salary: "₹ 5,00,000 per annum",
      description: "Exciting opportunity for freshers to join our software development team. Training provided.",
    },
    {
      id: 2,
      title: "Graduate Trainee - IT",
      company: "Wipro",
      location: "Hyderabad, India",
      salary: "₹ 4,50,000 per annum",
      description: "Entry-level position in IT. Work on live projects and learn from experienced professionals.",
    },
    {
      id: 3,
      title: "Business Analyst - Fresher",
      company: "HCL",
      location: "Chennai, India",
      salary: "₹ 6,00,000 per annum",
      description: "Analyze business needs and create reports. Training on business analysis tools provided.",
    },
    {
      id: 4,
      title: "Cloud Engineer - Fresher",
      company: "IBM",
      location: "Pune, India",
      salary: "₹ 6,50,000 per annum",
      description: "Learn and work on cloud-based projects with cutting-edge technologies.",
    },
    {
      id: 5,
      title: "Digital Marketing Trainee",
      company: "Microsoft",
      location: "Mumbai, India",
      salary: "₹ 5,50,000 per annum",
      description: "Opportunity to kickstart your career in digital marketing with hands-on training.",
    },
    {
      id: 6,
      title: "UI/UX Designer - Fresher",
      company: "Adobe",
      location: "Noida, India",
      salary: "₹ 6,00,000 per annum",
      description: "Collaborate on design projects and create user-friendly experiences. Training provided on Adobe tools.",
    },
  ];
  

  return (
    <div className="container py-5">
      <h1 className="text-center fw-bold mb-4">Fresher Job Opportunities</h1>
      <div className="row">
        {jobs.map((job) => (
          <div key={job.id} className="col-md-6 col-lg-4 mb-4">
            <div className="card shadow-sm h-100">
              <div className="card-body d-flex flex-column">
                <h5 className="card-title fw-bold">{job.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{job.company}</h6>
                <div className="d-flex justify-content-between align-items-center mb-3">
                <p className="card-text mb-0">
                  <strong>Location:</strong> {job.location} <br />
                  <strong>Salary:</strong> {job.salary}
                </p>
                <button className="btn btn-primary">Apply Now</button>
                </div>
                <div className="card-text">{job.description}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
