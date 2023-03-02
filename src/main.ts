import MovieAPI from "./models/movies/MovieAPI"
import FetchMovie from "./service/FetchMovie"
import { getEmptyValueMessageHTML } from "./templates/emptyValue"
import { getErrorAPIMessageHTML } from "./templates/errorAPI"
import { getMovieHTML } from "./templates/movie"
import { getNotFoundMovieMessageHTML } from "./templates/notFoundMovie"
import { getMoviesListHTML } from "./templates/search-list-movies/moviesList"
import MovieMapper from "./UI/mapper/MovieMapper"
import ShortMovieMapper from "./UI/mapper/ShortMovieMapper"

const fetchMovie = new FetchMovie()

const searchBtn = document.getElementById("search-btn")
const inputMovie = document.getElementById("search-movie") as HTMLInputElement
const resultNode = document.getElementById("result") as HTMLDivElement
const searchContainer = document.getElementById("search") as HTMLDivElement

function mapMovieAPIToLocal(movie: MovieAPI) {
	return new MovieMapper(movie).mapAPIToLocal()
}

function resetTheDisplay() {
	document.getElementById("movies-list")?.remove()
	inputMovie["classList"].remove("active-list-movies")
}
function displayMovieInformations(movieInput: HTMLInputElement) {
	const movieName = movieInput.value.trim()

	if (movieName.length === 0) {
		getEmptyValueMessageHTML(resultNode)
		return
	}

	fetchMovie
		.getMovie(movieName)
		.then((movie) => {
			if (movie.Response == "True") {
				getMovieHTML(mapMovieAPIToLocal(movie), resultNode)
			} else {
				getNotFoundMovieMessageHTML(resultNode)
			}
		})
		.catch(() => {
			getErrorAPIMessageHTML(resultNode)
		})
}

searchBtn?.addEventListener("click", () => {
	displayMovieInformations(inputMovie)
	inputMovie.value = ""
})

inputMovie.addEventListener("input", (e) => {
	const movieName = (e.target as HTMLInputElement).value
	console.log(movieName)
	if (movieName.length >= 3) {
		fetchMovie.getMoviesList(movieName).then((movies) => {
			document.getElementById("movies-list")?.remove()
			inputMovie.setAttribute("class", "active-list-movies")
			const moviesList = movies.map((movie) => new ShortMovieMapper(movie).mapAPIToLocal())
			getMoviesListHTML(searchContainer, moviesList)
		})
	} else {
		resetTheDisplay()
	}
})

window.addEventListener("click", () => resetTheDisplay())

