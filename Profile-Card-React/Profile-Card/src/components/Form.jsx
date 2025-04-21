import React, { useState } from "react";
import "../components/Form.css";

const Form = () => {
  const [formData, setFormData] = useState({
    location: "",
    name: "",
    age: "",
    gender: "",
    phone: "",
    job: "",
    company: "",
    about: "",
    cooking: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Phone validation (10-digit number)
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(formData.phone)) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }

    // Required fields validation
    if (!formData.location || !formData.name || !formData.age || !formData.gender || !formData.phone) {
      alert("Please fill out all required fields.");
      return;
    }

    console.log("Form submitted successfully:", formData);
    alert("Form submitted successfully!");
  };

  return (
    <div className="form-container">
      <h1>Your Profile</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="location">Location *</label>
          <input
            type="text"
            id="location"
            name="location"
            placeholder="Your location"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="name">Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="age">Age *</label>
          <input
            type="number"
            id="age"
            name="age"
            placeholder="Enter your age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="gender">Gender *</label>
          <select id="gender" name="gender" value={formData.gender} onChange={handleChange} required>
            <option value="">Choose</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone *</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="job">Job</label>
          <input type="text" id="job" name="job" placeholder="Enter your job title" value={formData.job} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label htmlFor="company">Company</label>
          <input type="text" id="company" name="company" placeholder="Enter your company name" value={formData.company} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label htmlFor="about">About You</label>
          <textarea id="about" name="about" placeholder="Tell us about yourself" value={formData.about} onChange={handleChange}></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="cooking">Cooking</label>
          <select id="cooking" name="cooking" value={formData.cooking} onChange={handleChange}>
            <option value="">Choose</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>

        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
};

export default Form;
