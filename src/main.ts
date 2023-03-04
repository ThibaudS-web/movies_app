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

function setClickOnItemMovie() {
	document.querySelectorAll(".item-list")?.forEach((item) => {
		item.addEventListener("click", () => {
			fetchMovie.getMovieByID((item as HTMLLIElement).dataset.imdbid!).then((movie) => {
				getMovieHTML(mapMovieAPIToLocal(movie), resultNode)
			})
		})
	})
}

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
		.getMovieByName(movieName)
		.then((movie) => {
			if (movie.Response == "True") {
				getMovieHTML(mapMovieAPIToLocal(movie), resultNode)
			} else {
				console.log(movie.Response)
				getNotFoundMovieMessageHTML(resultNode)
			}
		})
		.catch(() => {
			getErrorAPIMessageHTML(resultNode)
		})
}

function displayMoviesList(e: Event) {
	const movieName = (e.target as HTMLInputElement).value

	if (movieName.length >= 3) {
		fetchMovie.getMoviesList(movieName).then((movies) => {
			if (movies === undefined) return
			inputMovie.setAttribute("class", "active-list-movies")
			document.getElementById("movies-list")?.remove()
			const moviesList = movies.map((movie) => new ShortMovieMapper(movie).mapAPIToLocal())
			getMoviesListHTML(searchContainer, moviesList)
			setClickOnItemMovie()
		})
	} else {
		resetTheDisplay()
	}
}

searchBtn?.addEventListener("click", () => {
	displayMovieInformations(inputMovie)
	inputMovie.value = ""
})

inputMovie.addEventListener("input", (e) => {
	displayMoviesList(e)
})

window.addEventListener("click", () => resetTheDisplay())

