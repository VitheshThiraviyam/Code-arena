import "./about.css";

const AboutUs = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About Us</h1>
      <div className="about-grid">
        <div className="about-box">
          <h2 className="about-heading">Our Platform</h2>
          <p>
            A coding platform designed for students of the CSE department, where problem statements
            are curated by faculty and students get to solve them.
          </p>
        </div>
        <div className="about-box">
          <h2 className="about-heading">Interactive Learning</h2>
          <p>
            We provide an engaging environment that helps students improve their problem-solving
            and programming skills through real-time code evaluation.
          </p>
        </div>
        <div className="about-box">
          <h2 className="about-heading">Competitive Edge</h2>
          <p>
            Leaderboards and coding challenges motivate students to continuously enhance their
            coding abilities and compete with peers.
          </p>
        </div>
        <div className="about-box">
          <h2 className="about-heading">Faculty-Guided Challenges</h2>
          <p>
            Faculty members design thought-provoking problems to help students develop
            industry-relevant skills.
          </p>
        </div>
        <div className="about-box">
          <h2 className="about-heading">Collaborative Space</h2>
          <p>
            Students can also contribute problem statements, fostering a collaborative and
            innovative learning culture.
          </p>
        </div>
        <div className="about-box">
          <h2 className="about-heading">Join Us</h2>
          <p>
            Be a part of our community, take on coding challenges, and sharpen your programming
            skills to excel in the tech industry.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
