import ShortMovieAPI from "../../models/ShortMovieAPI"
import ShortMovieLocal from "../../models/ShortMovieLocal"

/**
 * @description Mapper classes apply data mapping rules between two layers of entities. This mapping layer reduces the impact of external data sources.
 * Here, we use a mapper class to transform API data into usable local data.
 *
 * The mapAPIToLocal() method transforms the API model into a local model.
 */

class ShortMovieMapper {
	private shortMovieAPI: ShortMovieAPI
	constructor(shortMovieAPI: ShortMovieAPI) {
		this.shortMovieAPI = shortMovieAPI
	}

	public mapAPIToLocal() {
		return new ShortMovieLocal(
			this.shortMovieAPI.Title,
			this.shortMovieAPI.Year,
			this.shortMovieAPI.imdbID,
			this.shortMovieAPI.Poster
		)
	}
}

export default ShortMovieMapper
