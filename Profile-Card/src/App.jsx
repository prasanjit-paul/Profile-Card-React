import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Form from "./components/Form";
import SubmittedDetails from "./components/SubmittedDetails";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/submitted-details" element={<SubmittedDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
