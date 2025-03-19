import { useState } from 'react';
import { Link } from "react-router-dom";
import '../App.css';
function Header()
{
    const [menuOpen, setMenuOpen] = useState(false);
    return(
        <div className="home">
        <div className="header">
            <div className="head">
                <h1>CODE ARENA</h1>
            </div>
            <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
                ☰
            </button>
            <div className={`navitems ${menuOpen ? "open" : ""}`}>
                <Link to='/'>Home</Link>
                <Link to='/Facultylogin'>Faculty Login</Link>
                <Link to='/Studentlogin'>Student Login</Link>
                <Link to='/Aboutus'>About Us</Link>
            </div>
        </div>
    </div>
    );
}
export default Header;