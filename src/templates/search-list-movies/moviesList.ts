import ShortMovieLocal from "../../models/short-movies/ShortMovieLocal"
import { itemMovie } from "./itemMovie"

export const getMoviesListHTML = (parentNode: HTMLElement, moviesList: ShortMovieLocal[]) => {
	const ul = document.createElement("ul")
	ul.setAttribute("id", "movies-list")
	ul.innerHTML = moviesList.map((movie) => itemMovie(movie)).join("")
	parentNode.append(ul)
}
