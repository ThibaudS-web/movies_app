import MovieAPI from "../../models/MovieAPI"
import MovieLocal from "../../models/MovieLocal"
import RatingsMovieAPI from "../../models/RatingsMovie"

/**
 * @description Mapper classes apply data mapping rules between two layers of entities. This mapping layer reduces the impact of external data sources.
 * Here, we use a mapper class to transform API data into usable local data.
 *
 * The mapAPI() method transforms the API model into a local model.
 */

class MovieMapper {
	movieAPI: MovieAPI
	constructor(movieAPI: MovieAPI) {
		this.movieAPI = movieAPI
	}

	public mapAPIToLocal() {
		return new MovieLocal(
			this.movieAPI.Title,
			this.movieAPI.Year,
			this.getFirstRatingSource(this.movieAPI.Ratings),
			this.stringToArrayGenre(this.movieAPI.Genre),
			this.movieAPI.Actors,
			this.movieAPI.Plot,
			this.movieAPI.Poster
		)
	}

	private stringToArrayGenre(genres: string) {
		return genres.split(",")
	}

	private getFirstRatingSource(ratings: Array<RatingsMovieAPI>) {
		return ratings[0].Value
	}
}

export default MovieMapper
