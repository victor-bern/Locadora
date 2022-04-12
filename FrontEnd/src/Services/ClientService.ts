import axios from "axios"
import Cliente from "../Models/Cliente"
const envApp = process.env.APP ?? "localhost:5027"

export const SaveClient = async (client: Cliente) => {
    await axios.post(`http://${envApp}/api/v1/clientes`, client);
}

export const EditClient = async (client: Cliente, id: string) => {
    await axios.put(`http://${envApp}/api/v1/clientes/edit/${id}`, client);
}

export const GetById = async (id: string): Promise<Cliente> => {
    const result = await axios.get<Cliente>(`http://${envApp}/api/v1/clientes/${id}`);

    return result.data
}

export const DeleteClient = async (id: string): Promise<void> => {
    await axios.delete(`http://${envApp}/api/v1/clientes/delete/${id}`);
}