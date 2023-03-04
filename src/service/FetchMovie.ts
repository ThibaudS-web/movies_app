import ApiResult from "../models/api/APIResult"
import MovieAPI from "../models/movies/MovieAPI"
import ShortMovieAPI from "../models/short-movies/ShortMovieAPI"
import { apiKey } from "./apiKey"

class FetchMovie {
	async getMovieByName(movieName: string): Promise<MovieAPI> {
		let data: MovieAPI
		let url = `https://www.omdbapi.com/?t=${movieName}&apikey=${apiKey}`
		try {
			const result = await fetch(url)
			data = await result.json()
			return data
		} catch (err) {
			throw new Error("Error API: ", err as Error)
		}
	}

	async getMoviesList(movieName: string): Promise<ShortMovieAPI[]> {
		let data: ShortMovieAPI[]
		let url = `https://www.omdbapi.com/?s=${movieName}&apikey=${apiKey}`
		try {
			const result = await fetch(url)
			data = ((await result.json()) as ApiResult<ShortMovieAPI[]>).Search
			return data
		} catch (err) {
			throw new Error("Error API: ", err as Error)
		}
	}
	async getMovieByID(imdbID: string) {
		let data: MovieAPI
		let url = `https://www.omdbapi.com/?i=${imdbID}&apikey=${apiKey}`
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
