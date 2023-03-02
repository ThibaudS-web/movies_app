import ShortMovieLocal from "../../models/ShortMovieLocal"
import { itemMovie } from "./itemMovie"

export const moviesList = (parentNode: HTMLElement, moviesList: ShortMovieLocal[]) => {
	const list = `
        <ul id="movies-list">
            ${moviesList.map((movie) => itemMovie(movie))}
        </ul>
    `

	parentNode.append(list)
}
