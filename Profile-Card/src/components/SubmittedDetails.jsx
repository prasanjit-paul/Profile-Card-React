import React from "react";
import { useLocation } from "react-router-dom";

const SubmittedDetails = () => {
  const location = useLocation();
  const submittedData = location.state;

  if (!submittedData) {
    return <p>No data submitted!</p>;
  }

  return (
    <div className="submitted-data">
      <h2>Submitted Details</h2>
      <p><strong>Location:</strong> {submittedData.location}</p>
      <p><strong>Name:</strong> {submittedData.name}</p>
      <p><strong>Age:</strong> {submittedData.age}</p>
      <p><strong>Gender:</strong> {submittedData.gender}</p>
      <p><strong>Phone:</strong> {submittedData.phone}</p>
      <p><strong>Job:</strong> {submittedData.job}</p>
      <p><strong>Company:</strong> {submittedData.company}</p>
      <p><strong>About:</strong> {submittedData.about}</p>
      <p><strong>Cooking:</strong> {submittedData.cooking}</p>
    </div>
  );
};

export default SubmittedDetails;