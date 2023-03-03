import ShortMovieLocal from "../../models/short-movies/ShortMovieLocal"

export const itemMovie = (movie: ShortMovieLocal) => {
	const { Title, Year, Poster, imdbID } = movie

	return `
            <li class="item-list" data-imdbID=${imdbID} >
                <img
                    class="img-item-movie"
                    src="${Poster === "N/A" ? "/assets/image_not_found.png" : Poster}"
                    alt="${Title} movie"
                />
                <span>${Title} (${Year})</span>
            </li>
        `
}
