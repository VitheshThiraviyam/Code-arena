import React, { useState } from "react";
import './Adminhome.css';
const AdminHome = () => {
  const [problems, setProblems] = useState([]);
  const [problemTitle, setProblemTitle] = useState("");
  const [problemDescription, setProblemDescription] = useState("");
  const [sampleInput, setSampleInput] = useState("");
  const [sampleOutput, setSampleOutput] = useState("");
  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [dueTime, setDueTime] = useState("");

  const addProblem = () => {
    if (problemTitle && problemDescription && sampleInput && sampleOutput && date && startTime && dueTime) {
      setProblems([
        ...problems,
        { problemTitle, problemDescription, sampleInput, sampleOutput, date, startTime, dueTime }
      ]);
      setProblemTitle("");
      setProblemDescription("");
      setSampleInput("");
      setSampleOutput("");
      setDate("");
      setStartTime("");
      setDueTime("");
    }
  };

  const deleteProblem = (index) => {
    setProblems(problems.filter((_, i) => i !== index));
  };

  return (
    <div className="admin-home-wrapper">
      <div className="admin-content-card">
        <h2 className="admin-title">Problem Management Dashboard</h2>

        <div className="form-group">
          <label className="form-label">Problem Title</label>
          <input className="form-input" value={problemTitle} onChange={(e) => setProblemTitle(e.target.value)} placeholder="Enter problem title" />
        </div>

        <div className="form-group">
          <label className="form-label">Problem Description</label>
          <textarea className="form-input text-area" value={problemDescription} onChange={(e) => setProblemDescription(e.target.value)} placeholder="Enter problem description" />
        </div>

        <div className="form-group">
          <label className="form-label">Sample Input</label>
          <textarea className="form-input text-area" value={sampleInput} onChange={(e) => setSampleInput(e.target.value)} placeholder="Enter sample input" />
        </div>

        <div className="form-group">
          <label className="form-label">Sample Output</label>
          <textarea className="form-input text-area" value={sampleOutput} onChange={(e) => setSampleOutput(e.target.value)} placeholder="Enter sample output" />
        </div>

        <div className="form-group">
          <label className="form-label">Date</label>
          <input className="form-input" type="date" value={date} onChange={(e) => setDate(e.target.value)} placeholder="Date" />
        </div>

        <div className="form-group">
          <label className="form-label">Starting Time</label>
          <input className="form-input" type="time" value={startTime} onChange={(e) => setStartTime(e.target.value)} placeholder="Starting Time" />
        </div>

        <div className="form-group">
          <label className="form-label">Due Time</label>
          <input className="form-input" type="time" value={dueTime} onChange={(e) => setDueTime(e.target.value)} placeholder="Due Time" />
        </div>

        <button className="submit-button" onClick={addProblem}>Add Problem</button>

        <div className="problems-container">
          {problems.map((problem, index) => (
            <div key={index} className="problem-card">
              <div className="problem-title">{problem.problemTitle}</div>
              <div>{problem.problemDescription}</div>
              <div className="sample-section">
                <strong>Sample Input:</strong>
                <pre>{problem.sampleInput}</pre>
              </div>
              <div className="sample-section">
                <strong>Sample Output:</strong>
                <pre>{problem.sampleOutput}</pre>
              </div>
              <div className="deadline-section"><strong>Date:</strong> {problem.date}</div>
              <div className="deadline-section"><strong>Starting Time:</strong> {problem.startTime}</div>
              <div className="deadline-section"><strong>Due Time:</strong> {problem.dueTime}</div>
              <button className="delete-button" onClick={() => deleteProblem(index)}>Delete</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
