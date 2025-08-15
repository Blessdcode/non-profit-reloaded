import React,{useState} from "react";
import { logo } from "../assets/img";
import { Link } from "react-router-dom";
import { AiOutlineMenu} from "react-icons/ai"

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    
    <div className="header-area">
      <nav>
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>
        <ul id="Navigation" className={isOpen ? "" : "activeMenu"}>
          <li>
            <Link to="/" className="active">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/causes">Causes</Link>
          </li>
          <li>
            <Link to="/impact">Impact</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <div className="donate_now">
          <Link to="donate" className="btn">
            Donate Now
          </Link>
        </div>
        <div id="menuIcon" onClick={() => setIsOpen(!isOpen)}>
          <AiOutlineMenu size={30} />
        </div>
      </nav>
    </div>
    
  );
};

export default Navigation;
