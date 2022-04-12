import { Alert, Button, InputLabel, Snackbar, TextField } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import locadoraContext from "../../Context/LocadoraContext";
import Cliente from "../../Models/Cliente";
import Error from "../../Models/Error";
import { EditClient, GetById, SaveClient } from "../../Services/ClientService";
import { Container } from "./styles";

const EditClientPage: React.FC = () => {
    const [client, setClient] = useState<Cliente | null>(null)
    const { id } = useParams()
    useEffect(() => {
        const fetch = async () => {
            const client = await GetById(id!)
            setClient(client);
            setName(client.Nome)
            setDocument(client.CPF)
            setBirthDate(client.DataNascimento)
        }
        fetch();
    }, [id])

    const { erros, setErros, clearErrors } = useContext(locadoraContext)
    const navigate = useNavigate()
    const [name, setName] = useState<string>("");
    const [document, setDocument] = useState<string>("");
    const [birthDate, setBirthDate] = useState<string>("");
    const [openErrors, setOpenErrors] = useState(false)
    const validateFields = () => {
        const err: Error[] = []
        if (name.length <= 0) err.push({ message: "Campo titulo vazio" })
        if (document.length <= 0) err.push({ message: "Campo CPF vazio" })
        if (document.length < 11) err.push({ message: "CPF deve conter 11 letras" })
        if (birthDate.length <= 0) err.push({ message: "O Campo Data de Nascimento vazio" })
        setErros(err);
    }

    const handleName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.currentTarget.value);
    };
    const handleDocument = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDocument(event.currentTarget.value);
    }
    const handleBirthDate = (event: React.ChangeEvent<HTMLInputElement>) => {
        setBirthDate(event.currentTarget.value)
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
            {client != null &&
                <>
                    <TextField style={styles} defaultValue={client.Nome} id="standard-basic" onChange={handleName} label="Nome do Cliente" variant="standard" />
                    <TextField style={styles} defaultValue={client.CPF} onChange={handleDocument} id="standard-basic" label="CPF" variant="standard" />
                    <InputLabel>Data de Nascimento</InputLabel>
                    <input type="date" defaultValue={client.DataNascimento} onChange={handleBirthDate} />

                    <Button onClick={async () => {
                        clearErrors();
                        setOpenErrors(true);
                        validateFields();
                        const client: Cliente = {
                            Nome: name,
                            CPF: document,
                            DataNascimento: birthDate
                        }
                        if (erros.length > 0) {
                            return;
                        }
                        await EditClient(client, id!)
                        navigate("/clientes")

                    }}>Enviar</Button>
                </>
            }

        </Container>
    )
}

export default EditClientPage;