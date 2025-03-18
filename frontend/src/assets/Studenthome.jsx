import { useState, useEffect } from "react";
import "./StudentDashboard.css";

function StudentDashboard() {
    const [userName, setUserName] = useState("Student");
    const [performance, setPerformance] = useState({ score: 0, rank: "N/A" });
    const [practiceProblems, setPracticeProblems] = useState([]);
    const [nextContest, setNextContest] = useState(null);
    const [resources, setResources] = useState([]);

    useEffect(() => {
        setUserName("John Doe");
        setPerformance({ score: 95, rank: "Top 10%" });
        setPracticeProblems([
            { title: "Two Sum", link: "https://leetcode.com/problems/two-sum/" },
            { title: "Binary Search", link: "https://leetcode.com/problems/binary-search/" },
            { title: "Graph Traversal", link: "https://leetcode.com/tag/graph/" }
        ]);
        setNextContest({ name: "CodeFest 2025", date: "March 25, 2025" });
        setResources([
            { title: "DSA Handbook", link: "https://dsa-guide.com" },
            { title: "React Docs", link: "https://react.dev" },
        ]);
    }, []);

    return (
        <div className="dashboard-container">
            <h1>Welcome, {userName}!</h1>
            <div className="dashboard-section">
                <h2>Performance</h2>
                <a href="/performance" className="dashboard-box">
                    View Performance (Score: {performance.score}, Rank: {performance.rank})
                </a>
            </div>
            <div className="dashboard-section">
                <h2>Practice Problems</h2>
                <div className="dashboard-grid">
                    {practiceProblems.map((problem, index) => (
                        <a key={index} href={problem.link} target="_blank" rel="noopener noreferrer" className="dashboard-box">
                            {problem.title}
                        </a>
                    ))}
                </div>
            </div>
            <div className="dashboard-section">
                <h2>Next Available Contest</h2>
                {nextContest ? (
                    <p>{nextContest.name} - {nextContest.date}</p>
                ) : (
                    <p>No upcoming contests</p>
                )}
            </div>
            <div className="dashboard-section">
                <h2>Study Materials & Resources</h2>
                <ul>
                    {resources.map((resource, index) => (
                        <li key={index}>
                            <a href={resource.link} target="_blank" rel="noopener noreferrer">{resource.title}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default StudentDashboard;