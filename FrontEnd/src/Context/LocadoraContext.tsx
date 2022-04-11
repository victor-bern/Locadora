import axios from "axios";
import { createContext, useState } from "react";
import Filme from "../Models/Filme";

interface LocadoraContextProps {
    filmes: Filme[],
    rentModalIsOpen: boolean,
    fetchFilmes: () => void,
    openRentModal: () => void,
    closeRentModal: () => void
}

const initialState: LocadoraContextProps = {
    filmes: [],
    rentModalIsOpen: false,
    fetchFilmes: () => { },
    openRentModal: () => { },
    closeRentModal: () => { },
}
const locadoraContext = createContext<LocadoraContextProps>(initialState);

const LocadoraContextProvider: React.FC = ({ children }) => {
    const [filmes, setFilmes] = useState<Filme[]>([]);
    const [rentModalIsOpen, setRentModalIsOpen] = useState<boolean>(false)
    const fetchFilmes = async () => {
        const result = await axios.get<Filme[]>("https://localhost:7027/api/v1/filmes");
        setFilmes(result.data);
    }

    const openRentModal = () => {
        setRentModalIsOpen(true)
    }
    const closeRentModal = () => {
        setRentModalIsOpen(false)
    }

    return <locadoraContext.Provider value={{ filmes, fetchFilmes, rentModalIsOpen, openRentModal, closeRentModal }}>
        {children}
    </locadoraContext.Provider>
}

export { LocadoraContextProvider }
export default locadoraContext;