import { Box, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import locadoraContext from "../../Context/LocadoraContext";
import { DeleteClient } from "../../Services/ClientService";

const ListClients: React.FC = () => {
    const { fetchClientes, clientes } = useContext(locadoraContext);

    useEffect(() => {
        const fetch = async () => {
            await fetchClientes();
        }
        fetch();
    }, [])
    return (
        <>
            <Link to={"/clientes/add"}>
                <Button style={{ display: "flex", alignSelf: "flex-end" }}>Adicionar Cliente</Button>
            </Link>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Id</TableCell>
                            <TableCell align="left">Nome</TableCell>
                            <TableCell align="left">CPF</TableCell>
                            <TableCell align="left">DataNascimento</TableCell>
                            <TableCell align="left">Ações</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {clientes && clientes.map((cliente) => (
                            <TableRow
                                key={cliente.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {cliente.id}
                                </TableCell>
                                <TableCell align="left">{cliente.Nome}</TableCell>
                                <TableCell align="left">{cliente.CPF}</TableCell>
                                <TableCell align="left">{cliente.DataNascimento}</TableCell>
                                <TableCell align="left">
                                    <Box>
                                        <Button><Link style={{ textDecoration: "none" }} to={"/clientes/editar/" + cliente.id}>Editar</Link></Button>
                                        <Button color="error" onClick={async () => {
                                            await DeleteClient(cliente.id!.toString())
                                            await fetchClientes();
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

export default ListClients;