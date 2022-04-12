import { Box, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import locadoraContext from "../../Context/LocadoraContext";

const ListRents: React.FC = () => {
    const { fetchAlugueis, alugueis } = useContext(locadoraContext);

    useEffect(() => {
        const fetch = async () => {
            await fetchAlugueis();
        }
        fetch();
        console.log(alugueis)
    }, [])
    return (
        <>
            <Link to={"/alugueis/add"}>
                <Button style={{ display: "flex", alignSelf: "flex-end" }}>Adicionar Aluguel</Button>
            </Link>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Id</TableCell>
                            <TableCell align="left">Cliente</TableCell>
                            <TableCell align="left">Filme</TableCell>
                            <TableCell align="left">Data do Aluguel</TableCell>
                            <TableCell align="left">Data de Devolução</TableCell>
                            <TableCell align="left">Ações</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {alugueis && alugueis.map((aluguel) => (
                            <TableRow
                                key={aluguel.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {aluguel.id}
                                </TableCell>
                                <TableCell align="left">{aluguel.Cliente.Nome}</TableCell>
                                <TableCell align="left">{aluguel.Filme.Titulo}</TableCell>
                                <TableCell align="left">{aluguel.DataAluguel}</TableCell>
                                <TableCell align="left">{aluguel.DataDevolucao}</TableCell>
                                <TableCell align="left">
                                    <Box>
                                        <Button><Link style={{ textDecoration: "none" }} to={"/clientes/editar/" + aluguel.id}>Editar</Link></Button>
                                        <Button color="error" onClick={async () => {
                                            // await DeleteClient(cliente.id!.toString())
                                            // await fetchClientes();
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

export default ListRents;