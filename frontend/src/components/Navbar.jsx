import { useState } from "react"
import logo from "../assets/logo.png"
import "../styles/Navbar.css"
import { FaGithub, FaLinkedin } from "react-icons/fa"
export function Navbar({ darkMode, setDarkMode }) {
    const [open, setOpen] = useState(false)

    return (
        <nav className="navbar">

            <div className="nav-container">
                <div className="brand">
                    <img src={logo} className="logo-a" />
                    <h2 className="logo">
                        Mohd Sohel Ansari
                    </h2>
                </div>
                <div className="nav-link">
                    <a href="#about">About</a>
                    <a href="#skills">skill</a>
                    <a href="#project">Project</a>
                    <a href="#Contact">Contact</a>
                </div>
                <div className="logo-to">
                    <a href="https://github.com/sohelansari6421-cmyk"><FaGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/sohel-ansari-659033339/"><FaLinkedin /></a>

                    <>
                        <button className="menu-btn" onClick={() => setOpen(!open)}> ⋮</button>
                        {open && (
                            <div className="dropdown">
                                <button className="dropdown-btn"
                                    onClick={() => setDarkMode(!darkMode)}>
                                    {darkMode ? "light Mode" : "dark Mode"}
                                </button>
                            </div>

                        )
                        }
                    </>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
