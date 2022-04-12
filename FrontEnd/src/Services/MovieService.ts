import axios from "axios"
import Filme from "../Models/Filme"

export const SaveMovie = async (movie: Filme) => {
    await axios.post("http://localhost/api/v1/filmes", movie);
}
export const EditMovie = async (movie: Filme, id: string) => {
    await axios.put(`http://localhost/api/v1/filmes/edit/${id}`, movie);
}

export const GetById = async (id: string): Promise<Filme> => {
    const result = await axios.get<Filme>(`http://localhost/api/v1/filmes/${id}`);

    return result.data
}

export const DeleteMovie = async (id: string): Promise<void> => {
    await axios.delete(`http://localhost/api/v1/filmes/delete/${id}`);
}