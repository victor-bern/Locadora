import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Toolbar, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Aluguel from "../../Models/Aluguel";
import { RentsWithLate } from "../../Services/RentService";

const Reports: React.FC = () => {
    const [rentsLate, setRentsLate] = useState<Aluguel[]>([]);
    useEffect(() => {
        const fetch = async () => {
            const rents = await RentsWithLate()
            setRentsLate(rents);
        }
        fetch();
    }, [])
    return (
        <>
            <TableContainer component={Paper}>
                <Toolbar
                    sx={{
                        pl: { sm: 2 },
                        pr: { xs: 1, sm: 1 }
                    }}
                >

                    <Typography
                        sx={{ flex: '1 1 100%' }}
                        variant="h6"
                        id="tableTitle"
                        component="div"
                    >
                        Alugueis com atraso
                    </Typography>

                </Toolbar>
                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Id</TableCell>
                            <TableCell align="left">Cliente</TableCell>
                            <TableCell align="left">Filme</TableCell>
                            <TableCell align="left">Data do Aluguel</TableCell>
                            <TableCell align="left">Data de Devolução</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rentsLate && rentsLate.map((aluguel) => (
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
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </>

    )
}

export default Reports;