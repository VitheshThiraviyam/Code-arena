import { Link } from "react-router-dom";


function Home() {
    const advantages = [
        {
            title: "Improve Coding Skills",
            description: "Enhance your problem-solving abilities by working on real-world coding problems.",
            image: "https://cdn-icons-png.flaticon.com/512/3063/3063399.png"
        },
        {
            title: "Coding Contests",
            description: "Compete in exciting contests and climb the leaderboard to showcase your talent.",
            image: "https://cdn-icons-png.flaticon.com/512/3845/3845875.png"
        },
        {
            title: "Assignments",
            description: "Complete faculty-assigned coding problems to strengthen your understanding.",
            image: "https://cdn-icons-png.flaticon.com/512/3502/3502531.png"
        },
        {
            title: "Interview-Style Problems",
            description: "Practice coding challenges that prepare you for job interviews and technical rounds.",
            image: "https://cdn-icons-png.flaticon.com/512/2910/2910793.png"
        },
        {
            title: "Industry-Relevant Challenges",
            description: "Solve problems inspired by real-world industry scenarios and build practical expertise.",
            image: "https://cdn-icons-png.flaticon.com/512/2621/2621098.png"
        },
        {
            title: "Peer Collaboration",
            description: "Engage with peers, discuss solutions, and learn together in a collaborative coding community.",
            image: "https://cdn-icons-png.flaticon.com/512/2991/2991148.png"
        }
    ];
    

    return (
        <>

            <div className="main">
                <h1>Welcome to Code Arena</h1>
                <p>
                    <strong>Code Arena</strong> is a competitive coding platform offered by the
                    <strong> Department of CSE </strong> at
                    <strong> Velammal College of Engineering and Technology.</strong>
                </p>
                <p>
                    Faculty members provide challenging problem statements, and students take on the
                    challenge to solve them, enhancing their coding skills and problem-solving abilities.
                </p>
                <p>
                    Join the platform, test your skills, and compete with peers in an engaging coding
                    environment!
                </p>
                <button className="join-btn">Get Started</button>
            </div>

            <div className="advantages">
                <h2>Proficiency Development</h2>
                <div className="advantage-items">
                    {advantages.map((adv, index) => (
                        <div className="advantage-card" key={index}>
                            <img src={adv.image} alt={adv.title} className="advantage-img" />
                            <h3>{adv.title}</h3>
                            <p>{adv.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Home;
