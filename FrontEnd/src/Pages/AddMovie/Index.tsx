import { Alert, Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Snackbar, TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import locadoraContext from "../../Context/LocadoraContext";
import Error from "../../Models/Error";
import Filme from "../../Models/Filme";
import { SaveMovie } from "../../Services/MovieService";
import { Container } from "./styles";

const AddMovie: React.FC = () => {
    const navigate = useNavigate()
    const { erros, setErros, clearErrors } = useContext(locadoraContext)
    const [title, setTitle] = useState<string>("");
    const [parentalRating, setParentalRating] = useState<number>(0);
    const [releasedYear, setreleasedYear] = useState<number>(0);
    const [openErrors, setOpenErrors] = useState(false)
    const validateFields = () => {
        const err: Error[] = []
        if (title.length <= 0) err.push({ message: "Campo titulo vazio" })
        if (parentalRating < 0) err.push({ message: "Classificação indicativa deve ser maior que 0" })
        if (releasedYear <= 0) err.push({ message: "Ano de lançamento deve ser maior que 0" })

        setErros(err);
    }

    const handleParental = (event: React.ChangeEvent<HTMLInputElement>) => {
        setParentalRating(Number.parseInt(event.currentTarget.value));
    };
    const handleTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value);
    }
    const handleReleased = (event: React.ChangeEvent<HTMLInputElement>) => {
        setreleasedYear(Number.parseInt(event.currentTarget.value));
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

            <TextField required style={styles} id="standard-basic" onChange={handleTitle} label="Titulo do Filme" variant="standard" />
            <TextField required style={styles} type={"number"} onChange={handleParental} id="standard-basic" label="Classificação Indicativa" variant="standard" />
            <TextField required style={styles} type={"number"} onChange={handleReleased} id="standard-basic" label="Ano de Lançamento" variant="standard" />


            <Button onClick={async () => {
                clearErrors();
                setOpenErrors(true);
                validateFields();
                const movie: Filme = {
                    Titulo: title,
                    ClassificacaoIndicativa: parentalRating,
                    Lancamento: releasedYear
                }
                if (erros.length > 0) {
                    return;
                }

                await SaveMovie(movie);
                navigate("/")
            }}>Enviar</Button>
        </Container>
    )
}

export default AddMovie;