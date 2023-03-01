import MovieAPI from "./models/MovieAPI"
import FetchMovie from "./service/FetchMovie"
import { getMovieHTML } from "./templates/displayMovie"
import MovieMapper from "./UI/mapper/MovieMapper"

const fetchMovie = new FetchMovie()

const searchBtn = document.getElementById("search-btn")
const inputMovie = document.getElementById("search-movie") as HTMLInputElement
const result = document.getElementById("result") as HTMLDivElement

function mapMovieAPIToLocal(movie: MovieAPI) {
	console.log(new MovieMapper(movie).mapAPIToLocal())
	return new MovieMapper(movie).mapAPIToLocal()
}

function showMovie(movieInput: HTMLInputElement) {
	const movieName = movieInput.value
	if (movieName.length === 0) {
		result.innerHTML = "<h2>Enter a title please</h2>"
		return
	}
	fetchMovie
		.getMovie(movieName)
		.then((movie) => {
			console.log(movie)
			if (movie.Response == "True") {
				const mappedMovie = mapMovieAPIToLocal(movie)
				getMovieHTML(mappedMovie, result)
			} else {
				result.innerHTML = "<h2>Movie not found!</h2>"
			}
		})
		.catch(() => {
			result.innerHTML = "<h2>Problem occured, try later...</h2>"
		})
}

searchBtn?.addEventListener("click", async () => {
	showMovie(inputMovie)
	inputMovie.value = ""
})

