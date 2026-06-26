import Navbar from "../components/Navbar";
import Skill from "../components/Skill";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
export function Home({ darkMode, setDarkMode }) {
    return (
        <> < Navbar darkMode={darkMode}
            setDarkMode={setDarkMode} />
            < Hero />
            <About />
            <Skill />
            < Projects />
            < Contact />
            < Footer />
        </>
    );
}

export default Home;