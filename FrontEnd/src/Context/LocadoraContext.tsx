import axios from "axios";
import { createContext, useState } from "react";
import Filme from "../Models/Filme";

interface LocadoraContextProps {
    filmes: Filme[],
    fetchFilmes: () => void
}

const initialState: LocadoraContextProps = {
    filmes: [],
    fetchFilmes: () => { }
}
const locadoraContext = createContext<LocadoraContextProps>(initialState);

const LocadoraContextProvider: React.FC = ({ children }) => {
    const [filmes, setFilmes] = useState<Filme[]>([]);

    const fetchFilmes = async () => {
        console.log("aa")
        const result = await axios.get<Filme[]>("https://localhost:7027/api/v1/filmes");
        console.log(result);
        setFilmes(result.data);
    }

    return <locadoraContext.Provider value={{ filmes, fetchFilmes }}>
        {children}
    </locadoraContext.Provider>
}

export { LocadoraContextProvider }
export default locadoraContext;