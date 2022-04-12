import { Alert, Button, FormControl, InputLabel, MenuItem, Select, Snackbar } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import locadoraContext from "../../Context/LocadoraContext";
import Aluguel from "../../Models/Aluguel";
import Error from "../../Models/Error";
import { EditRent, GetById } from "../../Services/RentService";
import { Container } from "./styles";

const EditRentPage: React.FC = () => {
    const [rent, setRent] = useState<Aluguel | null>(null)
    const { id } = useParams()
    const { fetchClientes, fetchFilmes, filmes, clientes, erros, setErros, clearErrors } = useContext(locadoraContext)
    const [clientId, setClientId] = useState<unknown>(0);
    const [filmeId, setFilmeId] = useState<unknown>(0);
    useEffect(() => {
        const fetch = async () => {
            await fetchClientes();
            await fetchFilmes();
            const rent = await GetById(id!);
            setRent(rent);
            setClientId(rent.Cliente.id)
            setFilmeId(rent.Filme.id);
        }
        fetch();
    }, [])
    const navigate = useNavigate()

    const [openErrors, setOpenErrors] = useState(false)
    const validateFields = () => {
        const err: Error[] = []
        if (clientId === 0) err.push({ message: "Cliente precisa ser selecionado" })
        if (filmeId === 0) err.push({ message: "Filme precisa ser selecionado" })

        setErros(err);
    }


    return (
        <Container>
            {erros.length > 0 && erros.map(err => {
                return (
                    <Snackbar open={openErrors} autoHideDuration={3000} onClose={() => setOpenErrors(false)} >
                        <Alert severity="warning" sx={{ width: '100%' }}>
                            {err.message}
                        </Alert>
                    </Snackbar>
                )
            })}

            {rent != null && filmes != null && clientes != null &&
                <>
                    <FormControl style={{ width: 450, marginTop: 16 }}>
                        <InputLabel id="client-select">Cliente</InputLabel>
                        <Select
                            labelId="client-select"
                            id="client-select"
                            label="Clientes"
                            defaultValue={rent!.Cliente.id}
                            onChange={(value) => {
                                setClientId(value.target.value)
                            }}
                        >
                            {clientes.map(cliente => {
                                return (

                                    <MenuItem value={cliente.id!}>{cliente.Nome}</MenuItem>
                                )
                            })}
                        </Select>

                    </FormControl>
                    <FormControl style={{ width: 450, marginTop: 16 }}>
                        <InputLabel id="movie-select">Filme</InputLabel>
                        <Select
                            labelId="movie-select"
                            id="movie-select"
                            label="Clientes"
                            defaultValue={rent!.Filme.id}
                            onChange={(value) => {
                                setFilmeId(value.target.value)
                            }}
                        >
                            {filmes.map(filme => {
                                return (
                                    <MenuItem value={filme.id!}>{filme.Titulo}</MenuItem>
                                )
                            })}
                        </Select>

                    </FormControl>
                </>}

            <Button onClick={async () => {
                clearErrors();
                setOpenErrors(true);
                validateFields();
                const rent: Aluguel = {
                    Cliente: clientes.find(item => item.id === clientId)!,
                    Filme: filmes.find(item => item.id === filmeId)!
                }
                if (erros.length > 0) {
                    return;
                }

                await EditRent(rent, id!);
                navigate("/alugueis")
            }}>Enviar</Button>
        </Container >
    )
}

export default EditRentPage; 