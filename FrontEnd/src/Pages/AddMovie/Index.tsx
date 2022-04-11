import { Alert, Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Snackbar, TextField } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Error from "../../Models/Error";
import Filme from "../../Models/Filme";
import { SaveMovie } from "../../Services/MovieService";
import { Container } from "./styles";

const AddMovie: React.FC = () => {
    const navigate = useNavigate()
    const [title, setTitle] = useState<string>("");
    const [parentalRating, setParentalRating] = useState<number>(0);
    const [isReleased, setIsReleased] = useState<boolean>(false);
    const [errors, setErrors] = useState<Error[]>([])
    const [openErrors, setOpenErrors] = useState(true)
    const validateFields = () => {
        const err: Error[] = []
        if (title.length <= 0) err.push({ message: "Campo titulo vazio" })
        if (parentalRating < 0) err.push({ message: "Classificação indicativa deve ser maior que 0" })

        setErrors(err);
    }

    const handleParental = (event: React.ChangeEvent<HTMLInputElement>) => {
        setParentalRating(Number.parseInt(event.currentTarget.value));
    };
    const handleTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value);
    }
    const handleReleased = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsReleased(event.currentTarget.value === "Sim" ? true : false);
    }
    const styles = {
        width: 250,
        margin: 16
    }
    return (
        <Container>
            {errors.length > 0 && errors.map(err => {
                return (
                    <Snackbar open={openErrors} autoHideDuration={3000} onClose={() => setOpenErrors(false)} >
                        <Alert severity="warning" sx={{ width: '100%' }}>
                            {err.message}
                        </Alert>
                    </Snackbar>
                )
            })}

            <TextField style={styles} id="standard-basic" onChange={handleTitle} label="Titulo do Filme" variant="standard" />
            <TextField style={styles} type={"number"} onChange={handleParental} defaultValue={0} id="standard-basic" label="Classificação Indicativa" variant="standard" />
            <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">Lançamento</FormLabel>
                <RadioGroup
                    row
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="Sim"
                    name="radio-buttons-group"
                    onChange={handleReleased}
                >
                    <FormControlLabel value="Sim" control={<Radio />} label="Sim" />
                    <FormControlLabel value="Não" control={<Radio />} label="Não" />
                </RadioGroup>
            </FormControl>

            <Button onClick={async () => {
                setErrors([]);
                setOpenErrors(true);
                const movie: Filme = {
                    Titulo: title,
                    ClassificacaoIndicativa: parentalRating,
                    Lancamento: isReleased
                }
                validateFields();
                if (errors.length > 0) {
                    return;
                }

                await SaveMovie(movie);
                navigate("/")
            }}>Enviar</Button>
        </Container>
    )
}

export default AddMovie;