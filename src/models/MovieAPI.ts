import RatingsMovieAPI from "./RatingsMovie"

class MovieAPI {
	Title: string
	Year: string
	Rated: string
	Released: string
	Ratings: Array<RatingsMovieAPI>
	Runtime: string
	Genre: string
	Director: string
	Writer: string
	Actors: string
	Plot: string
	Language: string
	Country: string
	Awards: string
	Poster: string
	Metascore: string
	imbdRating: string
	imbdVotes: string
	imbdID: string
	Type: string
	totalSeasons: string
	Response: string

	constructor(
		Title: string,
		Year: string,
		Rated: string,
		Released: string,
		Ratings: Array<RatingsMovieAPI>,
		Runtime: string,
		Genre: string,
		Director: string,
		Writer: string,
		Actors: string,
		Plot: string,
		Language: string,
		Country: string,
		Awards: string,
		Poster: string,
		Metascore: string,
		imbdRating: string,
		imbdVotes: string,
		imbdID: string,
		Type: string,
		totalSeasons: string,
		Response: string
	) {
		this.Title = Title
		this.Year = Year
		this.Rated = Rated
		this.Released = Released
		this.Ratings = Ratings
		this.Runtime = Runtime
		this.Genre = Genre
		this.Director = Director
		this.Writer = Writer
		this.Actors = Actors
		this.Plot = Plot
		this.Language = Language
		this.Country = Country
		this.Awards = Awards
		this.Poster = Poster
		this.Metascore = Metascore
		this.imbdRating = imbdRating
		this.imbdVotes = imbdVotes
		this.imbdID = imbdID
		this.Type = Type
		this.totalSeasons = totalSeasons
		this.Response = Response
	}
}

export default MovieAPI
