import { useEffect, useState } from "react";
import { Alert, Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Snackbar, TextField } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import Filme from "../../Models/Filme";
import { EditMovie, GetById } from "../../Services/MovieService";
import Error from "../../Models/Error";
import { Container } from "./styles";

const EditMoviePage: React.FC = () => {
    const [movie, setMovie] = useState<Filme | null>(null)
    const { id } = useParams()
    useEffect(() => {
        const fetch = async () => {
            const movie = await GetById(id!)
            setMovie(movie);
            setTitle(movie.Titulo);
            setParentalRating(movie.ClassificacaoIndicativa)
            setreleasedYear(movie.Lancamento)
        }
        fetch();
    }, [id])
    const navigate = useNavigate();
    const [title, setTitle] = useState<string>("");
    const [parentalRating, setParentalRating] = useState<number>(0);
    const [releasedYear, setreleasedYear] = useState<number>(0);

    const [errors, setErrors] = useState<Error[]>([])
    const [openErrors, setOpenErrors] = useState(true)
    const validateFields = () => {
        const err: Error[] = []
        if (title.length <= 0) err.push({ message: "Campo titulo vazio" })
        if (parentalRating < 0) err.push({ message: "Classificação indicativa deve ser maior que 0" })
        if (releasedYear <= 0) err.push({ message: "Ano de lançamento deve ser maior que 0" })
        setErrors(err);
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
            {errors.length > 0 && errors.map(err => {
                return (
                    <Snackbar open={openErrors} autoHideDuration={3000} onClose={() => setOpenErrors(false)} >
                        <Alert severity="warning" sx={{ width: '100%' }}>
                            {err.message}
                        </Alert>
                    </Snackbar>
                )
            })}
            {movie && <>
                <TextField style={styles} id="standard-basic" defaultValue={movie.Titulo} onChange={handleTitle} label="Titulo do Filme" variant="standard" />
                <TextField style={styles} type={"number"} defaultValue={movie.ClassificacaoIndicativa} onChange={handleParental} id="standard-basic" label="Classificação Indicativa" variant="standard" />
                <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label">Lançamento</FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue={movie.Lancamento ? "Sim" : "Não"}
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
                        Lancamento: releasedYear
                    }
                    validateFields();
                    if (errors.length > 0) {
                        return;
                    }

                    await EditMovie(movie, id!);
                    navigate("/")
                }}>Enviar</Button>
            </>
            }

        </Container>)
}


export default EditMoviePage;