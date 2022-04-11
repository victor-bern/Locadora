import { BrowserRouter, Route, Routes } from "react-router-dom"
import NavBar from "./Components/Navbar";
import Home from "./Pages/Home";
const AppRouter: React.FC = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;