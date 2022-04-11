import axios from "axios";
import { createContext, useState } from "react";
import Cliente from "../Models/Cliente";
import Filme from "../Models/Filme";

interface LocadoraContextProps {
    filmes: Filme[],
    clientes: Cliente[],
    fetchFilmes: () => Promise<void>,
    fetchClientes: () => Promise<void>
}

const initialState: LocadoraContextProps = {
    filmes: [],
    clientes: [],
    fetchFilmes: async () => { },
    fetchClientes: async () => { },
}
const locadoraContext = createContext<LocadoraContextProps>(initialState);

const LocadoraContextProvider: React.FC = ({ children }) => {
    const [filmes, setFilmes] = useState<Filme[]>([]);
    const [clientes, setClientes] = useState<Cliente[]>([]);
    const fetchFilmes = async () => {
        const result = await axios.get<Filme[]>("https://localhost:7027/api/v1/filmes");
        setFilmes(result.data);
    }
    const fetchClientes = async () => {
        const result = await axios.get<Cliente[]>("https://localhost:7027/api/v1/clientes");
        setClientes(result.data);
    }


    return <locadoraContext.Provider value={{ filmes, clientes, fetchFilmes, fetchClientes }}>
        {children}
    </locadoraContext.Provider>
}

export { LocadoraContextProvider }
export default locadoraContext;