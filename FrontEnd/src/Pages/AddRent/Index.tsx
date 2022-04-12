import { Alert, Button, FormControl, FormControlLabel, FormLabel, InputLabel, MenuItem, Radio, RadioGroup, Select, Snackbar, TextField } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import locadoraContext from "../../Context/LocadoraContext";
import Error from "../../Models/Error";
import Filme from "../../Models/Filme";
import { SaveMovie } from "../../Services/MovieService";
import { Container } from "./styles";

const AddRent: React.FC = () => {
    const { fetchClientes, fetchFilmes, filmes, clientes, erros, setErros, clearErrors } = useContext(locadoraContext)
    useEffect(() => {
        const fetch = async () => {
            await fetchClientes();
            await fetchFilmes();
        }
        fetch();
    }, [])
    const navigate = useNavigate()

    const [openErrors, setOpenErrors] = useState(false)
    const validateFields = () => {
        const err: Error[] = []
        // if (title.length <= 0) err.push({ message: "Campo titulo vazio" })
        // if (parentalRating < 0) err.push({ message: "Classificação indicativa deve ser maior que 0" })

        setErros(err);
    }

    const styles = {
        width: 250,
        margin: 16
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

            {filmes != null && clientes != null &&
                <>
                    <FormControl style={{ width: 450, marginTop: 16 }}>
                        <InputLabel id="client-select">Cliente</InputLabel>
                        <Select
                            labelId="client-select"
                            id="client-select"
                            label="Clientes"
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
                            onChange={(value) => {
                                console.log(value.target.value)
                            }}
                        >
                            {filmes.map(filme => {
                                return (
                                    <MenuItem value={filme.id!}>{filme.Titulo}</MenuItem>
                             
                                       )
                                        
                        </Select>
                                    
                                
                    </FormControl>
                </>}

            <Button onClick={async () => {
                clearErrors();
                setOpenErrors(true);
                validateFields();
                // const movie: Filme = {
                //     Titulo: title,
                //     ClassificacaoIndicativa: parentalRating,
                //     Lancamento: isReleased
                // }
                if (erros.length > 0) {
                    return;
                }

                // await SaveMovie(movie);
                navigate("/")
            }}>Enviar</Button>
        </Container>
    )
}

export default AddRent;