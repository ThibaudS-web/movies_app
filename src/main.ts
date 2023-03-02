import MovieAPI from "./models/MovieAPI"
import FetchMovie from "./service/FetchMovie"
import { getEmptyValueHTML } from "./templates/emptyValue"
import { getErrorAPIMessageHTML } from "./templates/errorAPI"
import { getMovieHTML } from "./templates/movie"
import { getNotFoundMovieHTML } from "./templates/notFoundMovie"
import MovieMapper from "./UI/mapper/MovieMapper"

const fetchMovie = new FetchMovie()

const searchBtn = document.getElementById("search-btn")
const inputMovie = document.getElementById("search-movie") as HTMLInputElement
const result = document.getElementById("result") as HTMLDivElement

function mapMovieAPIToLocal(movie: MovieAPI) {
	return new MovieMapper(movie).mapAPIToLocal()
}

function displayMovieInformations(movieInput: HTMLInputElement) {
	const movieName = movieInput.value.trim()  

	if (movieName.length === 0) {
		getEmptyValueHTML(result)
		return
	}

	fetchMovie
		.getMovie(movieName)
		.then((movie) => {
			if (movie.Response == "True") {
				getMovieHTML(mapMovieAPIToLocal(movie), result)
			} else {
				getNotFoundMovieHTML(result)
			}
		})
		.catch(() => {
			getErrorAPIMessageHTML(result)
		})
}

searchBtn?.addEventListener("click", () => {
	displayMovieInformations(inputMovie)
	inputMovie.value = ""
})

inputMovie.addEventListener('change', () => {
	console.log()
})
