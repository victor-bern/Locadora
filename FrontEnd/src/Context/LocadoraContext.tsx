import axios from "axios";
import { createContext, useState } from "react";
import Aluguel from "../Models/Aluguel";
import Cliente from "../Models/Cliente";
import Error from "../Models/Error";
import Filme from "../Models/Filme";

interface LocadoraContextProps {
    filmes: Filme[],
    clientes: Cliente[],
    alugueis: Aluguel[],
    erros: Error[],
    fetchFilmes: () => Promise<void>,
    fetchClientes: () => Promise<void>
    fetchAlugueis: () => Promise<void>
    setErros: (erros: Error[]) => void,
    clearErrors: () => void
}

const initialState: LocadoraContextProps = {
    filmes: [],
    clientes: [],
    alugueis: [],
    erros: [],
    fetchFilmes: async () => { },
    fetchClientes: async () => { },
    fetchAlugueis: async () => { },
    setErros: (erros: Error[]) => { },
    clearErrors: () => { }
}
const locadoraContext = createContext<LocadoraContextProps>(initialState);

const LocadoraContextProvider: React.FC = ({ children }) => {
    const [filmes, setFilmes] = useState<Filme[]>([]);
    const [clientes, setClientes] = useState<Cliente[]>([]);
    const [alugueis, setAlugueis] = useState<Aluguel[]>([]);
    const [erros, setErrs] = useState<Error[]>([])
    const fetchFilmes = async () => {
        const result = await axios.get<Filme[]>("http://localhost/api/v1/filmes");
        setFilmes(result.data);
    }
    const fetchClientes = async () => {
        const result = await axios.get<Cliente[]>("http://localhost/api/v1/clientes");
        setClientes(result.data);
    }
    const fetchAlugueis = async () => {
        const result = await axios.get<Aluguel[]>("http://localhost/api/v1/alugueis");
        setAlugueis(result.data);
    }

    const setErros = (erros: Error[]) => {
        setErrs(erros);
        console.log(erros)
    }

    const clearErrors = () => {
        setErrs([]);
    }


    return <locadoraContext.Provider value={{ filmes, clientes, alugueis, erros, setErros, clearErrors, fetchFilmes, fetchClientes, fetchAlugueis }}>
        {children}
    </locadoraContext.Provider>
}

export { LocadoraContextProvider }
export default locadoraContext;