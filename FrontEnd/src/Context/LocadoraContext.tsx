import axios from "axios";
import { createContext, useState } from "react";
import Cliente from "../Models/Cliente";
import Error from "../Models/Error";
import Filme from "../Models/Filme";

interface LocadoraContextProps {
    filmes: Filme[],
    clientes: Cliente[],
    erros: Error[],
    fetchFilmes: () => Promise<void>,
    fetchClientes: () => Promise<void>
    setErros: (erros: Error[]) => void,
    clearErrors: () => void
}

const initialState: LocadoraContextProps = {
    filmes: [],
    clientes: [],
    erros: [],
    fetchFilmes: async () => { },
    fetchClientes: async () => { },
    setErros: (erros: Error[]) => { },
    clearErrors: () => { }
}
const locadoraContext = createContext<LocadoraContextProps>(initialState);

const LocadoraContextProvider: React.FC = ({ children }) => {
    const [filmes, setFilmes] = useState<Filme[]>([]);
    const [clientes, setClientes] = useState<Cliente[]>([]);
    const [erros, setErrs] = useState<Error[]>([])
    const fetchFilmes = async () => {
        const result = await axios.get<Filme[]>("https://localhost:7027/api/v1/filmes");
        setFilmes(result.data);
    }
    const fetchClientes = async () => {
        const result = await axios.get<Cliente[]>("https://localhost:7027/api/v1/clientes");
        setClientes(result.data);
    }

    const setErros = (erros: Error[]) => {
        setErrs(erros);
        console.log(erros)
    }

    const clearErrors = () => {
        setErrs([]);
    }


    return <locadoraContext.Provider value={{ filmes, clientes, erros, setErros, clearErrors, fetchFilmes, fetchClientes }}>
        {children}
    </locadoraContext.Provider>
}

export { LocadoraContextProvider }
export default locadoraContext;