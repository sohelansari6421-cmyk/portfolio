import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import ReactPage from "../pages/ReactPage";
import DjangoPage from "../pages/DjangoPage";
import GitPage from "../pages/GitPage";
import RestApiPage from "../pages/RestApiPage";
import PythonPage from "../pages/PythonPage";
import JavaScriptPage from "../pages/JavaScriptPage";
import Navbar from "../components/Navbar.jsx";
import ComingSoon from "../components/ComingSoon.jsx";

function AppRouter({ darkMode, setDarkMode }) {
    return (
        <BrowserRouter>
            <Routes>

                <Route path="/" element={<Home darkMode={darkMode}
                    setDarkMode={setDarkMode} />}
                />
                <Route path="/coming-soon" element={<ComingSoon />} />
                <Route path="/react" element={<ReactPage />} />
                <Route path="/django" element={<DjangoPage />} />
                <Route path="/git" element={<GitPage />} />
                <Route path="/restapi" element={<RestApiPage />} />
                <Route path="/python" element={<PythonPage />} />
                <Route path="/javascript" element={<JavaScriptPage />} />


            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;