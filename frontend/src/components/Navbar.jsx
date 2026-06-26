import { useState } from "react"
import "../styles/Navbar.css"
import { FaGithub, FaLinkedin } from "react-icons/fa"
export function Navbar({ darkMode, setDarkMode }) {
    const [open, setOpen] = useState(false)

    return (
        <nav className="navbar">

            <div className="nav-container">
                <h1 className="logo">
                    Mohd Sohel Ansari
                </h1>

                <div className="nav-link">
                    <a href="#about">About</a>
                    <a href="#skills">skill</a>
                    <a href="#project">Project</a>
                    <a href="#Contact">Contact</a>
                </div>
                <div className="logo-to">
                    <a href="https://aniwatch.co.at/"><FaGithub /></a>
                    <FaLinkedin />
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
