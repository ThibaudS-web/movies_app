import MovieAPI from "../models/MovieAPI"
import { apiKey } from "./apiKey"

class FetchMovie {
	async getMovie(movieName: string): Promise<MovieAPI> {
		let data: MovieAPI
		let url = `http://www.omdbapi.com/?t=${movieName}&apikey=${apiKey}`
		try {
			const result = await fetch(url)
			data = await result.json()
			return data
		} catch (err) {
			throw new Error("Error API: ", err as Error)
		}
	}

	async getMoviesList(movieName: string): Promise<MovieAPI[]> {
		let data: MovieAPI[]
		let url = `http://www.omdbapi.com/?s=${movieName}&apikey=${apiKey}`
		try {
			const result = await fetch(url)
			data = await result.json()
			return data
		} catch (err) {
			throw new Error("Error API: ", err as Error)
		}
	}
}

export default FetchMovie
