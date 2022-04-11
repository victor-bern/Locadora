import { BrowserRouter, Route, Routes } from "react-router-dom"
import NavBar from "./Components/NavBar";
import AddMovie from "./Pages/AddMovie/Index";
import Home from "./Pages/Home";
const AppRouter: React.FC = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/movie/add" element={<AddMovie />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;