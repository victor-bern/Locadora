import axios from "axios"
import Aluguel from "../Models/Aluguel";

const envApp = process.env.APP ?? "localhost"

export const SaveRent = async (rent: Aluguel) => {
    await axios.post(`http://${envApp}/api/v1/alugueis`, rent);
}

export const EditRent = async (rent: Aluguel, id: string) => {
    await axios.put(`http://${envApp}/api/v1/alugueis/edit/${id}`, rent);
}

export const GetById = async (id: string): Promise<Aluguel> => {
    const result = await axios.get<Aluguel>(`http://${envApp}/api/v1/alugueis/${id}`);

    return result.data
}

export const DeleteRent = async (id: string): Promise<void> => {
    await axios.delete(`http://${envApp}/api/v1/alugueis/delete/${id}`);
}

export const RentsWithLate = async (): Promise<Aluguel[]> => {
    const rents = await axios.get<Aluguel[]>(`http://${envApp}/api/v1/alugueis/com-atraso`)

    return rents.data;
}