import axios from "axios"
import Cliente from "../Models/Cliente"

export const SaveClient = async (client: Cliente) => {
    await axios.post("https://localhost:7027/api/v1/clientes", client);
}

export const GetById = async (id: string): Promise<Cliente> => {
    const result = await axios.get<Cliente>(`https://localhost:7027/api/v1/clientes/${id}`);

    return result.data
}

export const DeleteClient = async (id: string): Promise<void> => {
    await axios.delete(`https://localhost:7027/api/v1/clientes/delete/${id}`);
}