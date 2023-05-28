import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components";
import HomePage from "./screens/Home/HomePage";
import Test from "./screens/Test/Test";

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/test" element={<Test />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
