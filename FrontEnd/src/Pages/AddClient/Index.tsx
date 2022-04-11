import { Alert, Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Snackbar, TextField } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cliente from "../../Models/Cliente";
import Error from "../../Models/Error";
import Filme from "../../Models/Filme";
import { SaveClient } from "../../Services/ClientService";
import { SaveMovie } from "../../Services/MovieService";
import { Container } from "./styles";

const AddClient: React.FC = () => {
    const navigate = useNavigate()
    const [name, setName] = useState<string>("");
    const [document, setDocument] = useState<string>("");
    const [birthDate, setBirthDate] = useState<string>("");
    const [errors, setErrors] = useState<Error[]>([])
    const [openErrors, setOpenErrors] = useState(true)
    const validateFields = () => {
        const err: Error[] = []
        if (name.length <= 0) err.push({ message: "Campo titulo vazio" })
        if (document.length <= 0) err.push({ message: "Campo CPF vazio" })
        if (document.length < 11) err.push({ message: "CPF deve conter 11 letras" })
        setErrors(err);
    }

    const handleName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.currentTarget.value);
    };
    const handleDocument = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDocument(event.currentTarget.value);
    }
    const handleBirthDate = (event: React.ChangeEvent<HTMLInputElement>) => {

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

            <TextField style={styles} id="standard-basic" onChange={handleName} label="Nome do Cliente" variant="standard" />
            <TextField style={styles} onChange={handleDocument} id="standard-basic" label="CPF" variant="standard" />
            <input type="date" onChange={handleBirthDate} />

            <Button onClick={async () => {
                setErrors([]);
                setOpenErrors(true);
                const client: Cliente = {
                    Nome: name,
                    CPF: document,
                    DataNascimento: birthDate
                }
                validateFields();
                if (errors.length > 0) {
                    return;
                }
                await SaveClient(client)

                navigate("/clientes")
            }}>Enviar</Button>
        </Container>
    )
}

export default AddClient;