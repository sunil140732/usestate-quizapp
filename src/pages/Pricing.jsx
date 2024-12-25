import React from "react";

const Pricing = () => {
  const pricingPlans = [
    {
      id: 1,
      title: "Basic Plan",
      price: "₹999/month",
      features: [
        "Access to 10 job applications per month",
        "Resume review",
        "Email support",
        "Exclusive access to job search webinars",
      ],
      buttonLabel: "Get Started",
    },
    {
      id: 2,
      title: "Professional Plan",
      price: "₹1,999/month",
      features: [
        "Unlimited job applications",
        "Resume and cover letter review",
        "Priority email support",
        "Access to mock interviews",
      ],
      buttonLabel: "Sign Up Now",
    },
    {
      id: 3,
      title: "Premium Plan",
      price: "₹3,499/month",
      features: [
        "All features in Professional Plan",
        "One-on-one career counseling",
        "Customized job alerts",
        "24/7 support",
      ],
      buttonLabel: "Join Premium",
    },
  ];

  return (
    <div className="container py-5">
      <h1 className="text-center fw-bold mb-4">Pricing Plans</h1>
      <div className="row">
        {pricingPlans.map((plan) => (
          <div key={plan.id} className="col-md-6 col-lg-4 mb-4">
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title fw-bold text-center">{plan.title}</h5>
                <h6 className="card-subtitle mb-4 text-muted text-center">
                  {plan.price}
                </h6>
                <ul className="list-unstyled">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="mb-2">
                      <i className="bi bi-check-circle-fill text-success me-2"></i>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="btn btn-primary w-100 mt-3">
                  {plan.buttonLabel}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
