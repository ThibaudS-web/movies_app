import MovieAPI from "../../models/movies/MovieAPI"
import MovieLocal from "../../models/movies/MovieLocal"

/**
 * @description Mapper classes apply data mapping rules between two layers of entities. This mapping layer reduces the impact of external data sources.
 * Here, we use a mapper class to transform API data into usable local data.
 *
 * The mapAPIToLocal() method transforms the API model into a local model.
 */

class MovieMapper {
	private movieAPI: MovieAPI
	constructor(movieAPI: MovieAPI) {
		this.movieAPI = movieAPI
	}

	public mapAPIToLocal() {
		return new MovieLocal(
			this.movieAPI.Title,
			this.movieAPI.Year,
			this.movieAPI.imdbRating,
			this.stringToArrayGenre(this.movieAPI.Genre),
			this.movieAPI.Actors,
			this.movieAPI.Plot,
			this.movieAPI.Poster,
			this.movieAPI.Runtime,
			this.movieAPI.Country,
			this.movieAPI.Writer,
			this.movieAPI.Response
		)
	}

	private stringToArrayGenre(genres: string) {
		return genres.split(",").map((genre) => genre.trim())
	}
}

export default MovieMapper
