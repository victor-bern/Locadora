import axios from "axios"
import Aluguel from "../Models/Aluguel";


export const SaveRent = async (rent: Aluguel) => {
    await axios.post("http://localhost/api/v1/alugueis", rent);
}

export const EditRent = async (rent: Aluguel, id: string) => {
    await axios.put(`http://localhost/api/v1/alugueis/edit/${id}`, rent);
}

export const GetById = async (id: string): Promise<Aluguel> => {
    const result = await axios.get<Aluguel>(`http://localhost/api/v1/alugueis/${id}`);

    return result.data
}

export const DeleteRent = async (id: string): Promise<void> => {
    await axios.delete(`http://localhost/api/v1/alugueis/delete/${id}`);
}