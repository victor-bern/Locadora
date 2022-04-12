import { Box, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import locadoraContext from "../../Context/LocadoraContext";
import { DeleteMovie } from "../../Services/MovieService";

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
            <Link to={"/filmes/add"}>
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
                            <TableCell align="left">Ações</TableCell>
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
                                <TableCell align="left">{filme.ClassificacaoIndicativa === 0 ? "Livre" : filme.ClassificacaoIndicativa + " anos"}</TableCell>
                                <TableCell align="left">{filme.Lancamento}</TableCell>
                                <TableCell align="left">
                                    <Box>
                                        <Button><Link style={{ textDecoration: "none" }} to={"/filmes/editar/" + filme.id}>Editar</Link></Button>
                                        <Button color="error" onClick={async () => {
                                            await DeleteMovie(filme.id!.toString())
                                            await fetchFilmes();
                                        }}>Deletar</Button>
                                    </Box>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>

    )
}

export default Home;