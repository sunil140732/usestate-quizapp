import React from "react";

const Resources = () => {
  const resources = [
    {
      id: 1,
      title: "Resume Building Guide",
      description: "Learn how to craft a professional resume that stands out.",
      link: "https://novoresume.com/career-blog/how-to-write-a-resume-guide",
    },
    {
      id: 2,
      title: "Interview Preparation Tips",
      description: "Ace your interviews with our expert tips and strategies.",
      link: "https://nationalcareers.service.gov.uk/careers-advice/interview-advice",
    },
    {
      id: 3,
      title: "Job Search Platforms",
      description: "Explore the best platforms for finding fresher job opportunities.",
      link: "https://www.foundit.in/seeker/profile",
    },
    {
      id: 4,
      title: "Technical Skill Tutorials",
      description: "Enhance your skills with free online tutorials for coding, design, and more.",
      link: "https://www.coursera.org/articles/what-are-technical-skills",
    },
    {
      id: 5,
      title: "Networking Tips for Freshers",
      description: "Build a strong professional network to grow your career.",
      link: "https://www.strykercareersblog.com/post/networking-tips-for-students-8-tips-to-set-yourself-up-for-success",
    },
    {
      id: 6,
      title: "Online Certification Courses",
      description: "Gain certifications to boost your profile and job prospects.",
      link: "https://www.shiksha.com/online-courses/free-online-courses-certificates",
    },
  ];

  return (
    <div className="container py-5">
      <h1 className="text-center fw-bold mb-4">Resources for Freshers</h1>
      <div className="row">
        {resources.map((resource) => (
          <div key={resource.id} className="col-md-6 col-lg-4 mb-4">
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title fw-bold">{resource.title}</h5>
                <p className="card-text">{resource.description}</p>
                <a
                  href={resource.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary w-100 mt-2"
                >
                  Explore Now
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resources;
