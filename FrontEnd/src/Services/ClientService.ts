import axios from "axios"
import Cliente from "../Models/Cliente"

export const SaveClient = async (client: Cliente) => {
    await axios.post("http://localhost/api/v1/clientes", client);
}

export const EditClient = async (movie: Cliente, id: string) => {
    await axios.put(`http://localhost/api/v1/clientes/edit/${id}`, movie);
}

export const GetById = async (id: string): Promise<Cliente> => {
    const result = await axios.get<Cliente>(`http://localhost/api/v1/clientes/${id}`);

    return result.data
}

export const DeleteClient = async (id: string): Promise<void> => {
    await axios.delete(`http://localhost/api/v1/clientes/delete/${id}`);
}