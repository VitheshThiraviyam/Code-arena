import { useState, useEffect } from "react";
import "./StudentDashboard.css";
import { Link } from "react-router-dom";

function StudentDashboard() {
  const [userName, setUserName] = useState("Student");

  useEffect(() => {
    const storedUserName = localStorage.getItem("userName");
    console.log("Retrieved userName from localStorage:", storedUserName);
    if (storedUserName) {
      setUserName(storedUserName);
    }
  }, []);

  return (
    <div className="dashboard-container">
      <h1>Welcome, {userName !== "undefined" && userName ? userName : "Student"}!</h1>

      <div className="dashboard-section">
        <h2>Performance</h2>
        <Link to="/performance" className="dashboard-box">
          View Performance
        </Link>
      </div>

      <div className="dashboard-section">
        <h2>Practice Problems</h2>
        <Link to="/problemlist" className="dashboard-box">
          View Problems
        </Link>
      </div>

      <div className="dashboard-section">
        <h2>Next Available Contest</h2>
        <Link to="/contest" className="dashboard-box">
          View Contest
        </Link>
      </div>

      <div className="dashboard-section">
        <h2>Study Materials & Resources</h2>
        <Link to="/resources" className="dashboard-box">
          View Resources
        </Link>
      </div>
    </div>
  );
}

export default StudentDashboard;
