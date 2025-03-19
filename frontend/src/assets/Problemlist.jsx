import React from "react";
import "./Problemlist.css";
function Problemlist() {
    const problems = [
        { name: "CodeForces - Two Sum", link: "https://codeforces.com/problemset/problem/1/A" },
        { name: "CodeForces - Next Round", link: "https://codeforces.com/problemset/problem/158/A" },
        { name: "CodeForces - Beautiful Matrix", link: "https://codeforces.com/problemset/problem/263/A" },
        { name: "AtCoder - Beginner Contest Problem", link: "https://atcoder.jp/contests/abc300/tasks/abc300_a" },
        { name: "AtCoder - Counting Problem", link: "https://atcoder.jp/contests/abc248/tasks/abc248_b" },
        { name: "HackerRank - Simple Array Sum", link: "https://www.hackerrank.com/challenges/simple-array-sum/problem" },
        { name: "HackerRank - Birthday Cake Candles", link: "https://www.hackerrank.com/challenges/birthday-cake-candles/problem" },
        { name: "GeeksForGeeks - Equilibrium Point", link: "https://www.geeksforgeeks.org/problems/equilibrium-point-1587115620/1" },
        { name: "GeeksForGeeks - Subarray with Given Sum", link: "https://www.geeksforgeeks.org/problems/subarray-with-given-sum-1587115621/1" },
        { name: "CodeChef - Reverse The Number", link: "https://www.codechef.com/problems/FLOW007" }
    ];

    return (
        <div className="problem-container">
            <div className="problem-card">
                <h2 className="problem-title">Problem List</h2>
                <ul className="problem-list">
                    {problems.map((problem, index) => (
                        <li key={index} className="problem-item">
                            <a 
                                href={problem.link} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="problem-link"
                            >
                                {problem.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Problemlist;
