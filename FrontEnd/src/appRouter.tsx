import { BrowserRouter, Route, Routes } from "react-router-dom"
import NavBar from "./Components/NavBar";
import AddClient from "./Pages/AddClient/Index";
import AddMovie from "./Pages/AddMovie/Index";
import EditMovie from "./Pages/EditMovie";
import Home from "./Pages/Home";
import ListClients from "./Pages/ListClients";
const AppRouter: React.FC = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/clientes" element={<ListClients />} />
                <Route path="/clientes/add" element={<AddClient />} />
                <Route path="/filmes/add" element={<AddMovie />} />
                <Route path="/filmes/editar/:id" element={<EditMovie />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;