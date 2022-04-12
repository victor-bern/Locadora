import { BrowserRouter, Route, Routes } from "react-router-dom"
import NavBar from "./Components/NavBar";
import AddClient from "./Pages/AddClient/Index";
import AddMovie from "./Pages/AddMovie/Index";
import AddRent from "./Pages/AddRent/Index";
import EditClientPage from "./Pages/EditClient/Index";
import EditMoviePage from "./Pages/EditMovie";
import Home from "./Pages/Home";
import ListClients from "./Pages/ListClients";
import ListRents from "./Pages/ListRents";
import Reports from "./Pages/Reports";
const AppRouter: React.FC = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/clientes" element={<ListClients />} />
                <Route path="/clientes/add" element={<AddClient />} />
                <Route path="/clientes/editar/:id" element={<EditClientPage />} />
                <Route path="/filmes/add" element={<AddMovie />} />
                <Route path="/filmes/editar/:id" element={<EditMoviePage />} />
                <Route path="/alugueis" element={<ListRents />} />
                <Route path="/alugueis/add" element={<AddRent />} />
                <Route path="/relatorios" element={<Reports />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;