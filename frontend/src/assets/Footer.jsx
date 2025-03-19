import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <p className="footer-text">&copy; {new Date().getFullYear()} Velammal College of Engineering and Technology - CSE Department. All Rights Reserved.</p>
      <p className="footer-subtext">Empowering students through coding and innovation.</p>
    </footer>
  );
};

export default Footer;