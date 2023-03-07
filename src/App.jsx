import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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

function App() {
    return (
        <Router>
            <div className="relative z-0 bg-primary">
                <div
                    className="bg-hero-pattern
                
                
                bg-cover bg-no-repeat bg-center"
                >
                    <Navbar />
                    <Hero />
                </div>
                <About />
                <Experience />
                <Tech />
                <Works />
                <Feedbacks />
                <div className="relative z-0">
                    <Contact />
                    <StarsCanvas />
                </div>
            </div>
        </Router>
    );
}

export default App;
