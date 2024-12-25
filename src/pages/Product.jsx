import React from "react";

const Product = () => {
  const courses = [
    {
      id: 1,
      title: "Full Stack Web Development",
      provider: "Coursera",
      duration: "6 months",
      price: "₹20,000",
      description: "Master front-end and back-end technologies to build robust web applications.",
    },
    {
      id: 2,
      title: "Data Science for Beginners",
      provider: "edX",
      duration: "4 months",
      price: "₹15,000",
      description: "Learn the fundamentals of data analysis, visualization, and machine learning.",
    },
    {
      id: 3,
      title: "Cloud Computing Essentials",
      provider: "Udemy",
      duration: "3 months",
      price: "₹12,000",
      description: "Understand cloud infrastructure, deployment, and services like AWS and Azure.",
    },
    {
      id: 4,
      title: "Digital Marketing Fundamentals",
      provider: "Google Digital Garage",
      duration: "2 months",
      price: "Free",
      description: "Gain hands-on knowledge of SEO, social media marketing, and Google Ads.",
    },
    {
      id: 5,
      title: "Python for Everybody",
      provider: "Udacity",
      duration: "3 months",
      price: "₹10,000",
      description: "Learn Python programming from scratch, including data structures and APIs.",
    },
    {
      id: 6,
      title: "UI/UX Design Specialization",
      provider: "LinkedIn Learning",
      duration: "5 months",
      price: "₹18,000",
      description: "Develop design skills and create user-friendly interfaces for apps and websites.",
    },
  ];

  return (
    <div className="container py-5">
      <h1 className="text-center fw-bold mb-4">Courses for Freshers</h1>
      <div className="row">
        {courses.map((course) => (
          <div key={course.id} className="col-md-6 col-lg-4 mb-4">
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title fw-bold">{course.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{course.provider}</h6>
                <p className="card-text">
                  <strong>Duration:</strong> {course.duration} <br />
                  <strong>Price:</strong> {course.price} <br />
                  {course.description}
                </p>
                <button className="btn btn-primary w-100 mt-2">Enroll Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
