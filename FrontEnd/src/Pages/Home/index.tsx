import { useContext, useEffect } from "react";
import locadoraContext from "../../Context/LocadoraContext";

const Home: React.FC = () => {
    const { filmes, fetchFilmes } = useContext(locadoraContext)
    useEffect(() => {
        const teste = () => {
            console.log("na funcao");
            fetchFilmes();
            console.log("na funcao saiu")
        }
        teste()
    }, [])
    return (
        <>
            <h1>Home</h1>
        </>
    )
}

export default Home;