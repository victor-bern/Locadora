import axios from "axios"
import Filme from "../Models/Filme"

export const SaveMovie = async (movie: Filme) => {
    const result = await axios.post("https://localhost:7027/api/v1/filmes", movie);
}