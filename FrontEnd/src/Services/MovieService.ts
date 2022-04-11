import axios from "axios"
import Filme from "../Models/Filme"

export const SaveMovie = async (movie: Filme) => {
    const result = await axios.post("https://localhost:7027/api/v1/filmes", movie);
}

export const GetById = async (id: string): Promise<Filme> => {
    const result = await axios.get<Filme>(`https://localhost:7027/api/v1/filmes/${id}`);

    return result.data
}

export const DeleteMovie = async (id: string): Promise<void> => {
    await axios.delete(`https://localhost:7027/api/v1/filmes/delete/${id}`);
}