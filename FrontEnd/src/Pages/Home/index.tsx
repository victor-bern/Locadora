import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import locadoraContext from "../../Context/LocadoraContext";

const Home: React.FC = () => {
    const { fetchFilmes, filmes } = useContext(locadoraContext);

    useEffect(() => {
        const fetch = async () => {
            await fetchFilmes();
        }
        fetch();
    }, [])
    return (
        <>
            <Link to={"/movie/add"}>
                <Button style={{ display: "flex", alignSelf: "flex-end" }}>Adicionar Filme</Button>
            </Link>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Id</TableCell>
                            <TableCell align="left">Titulo</TableCell>
                            <TableCell align="left">Classificação</TableCell>
                            <TableCell align="left">É Lançamento</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filmes && filmes.map((filme) => (
                            <TableRow
                                key={filme.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {filme.id}
                                </TableCell>
                                <TableCell align="left">{filme.Titulo}</TableCell>
                                <TableCell align="left">{filme.ClassificacaoIndicativa}</TableCell>
                                <TableCell align="left">{filme.Lancamento ? "Sim" : "Não"}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>

    )
}

export default Home;