import ShortMovieLocal from "../../models/ShortMovieLocal"

export const itemMovie = (movie: ShortMovieLocal) => {
	const { Title, Year, Poster, imdbID } = movie

	return `
            <li class="item-list" data-imdbID=${imdbID} >
                <img
                    class="img-item-movie"
                    src="${Poster}"
                    alt="${Title} movie"
                />
                <span>${Title} (${Year})</span>
            </li>
        `
}
