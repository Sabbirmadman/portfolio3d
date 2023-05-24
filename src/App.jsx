import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
    Hero,
    Navbar,
    About,
    Tech,
    Experience,
    Works,
    Feedbacks,
    Contact,
    EarthCanvas,
    BallCanvas,
    ComputersCanvas,
    StarsCanvas,
} from "./components";
import HomePage from "./screens/HomePage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<About />} />
                <Route path="/tech" element={<Tech />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/works" element={<Works />} />
                <Route path="/feedbacks" element={<Feedbacks />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
