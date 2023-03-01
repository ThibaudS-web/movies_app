class MovieLocal {
	Title: string
	Year: string
	imdbRating: string
	Genre: Array<string>
	Actors: string
	Plot: string
	Poster: string
	Runtime: string
	Country: string
	Writer: string
	Response: string
	constructor(
		Title: string,
		Year: string,
		imdbRating: string,
		Genre: Array<string>,
		Actors: string,
		Plot: string,
		Poster: string,
		Runtime: string,
		Country: string,
		Writer: string,
		Response: string
	) {
		this.Title = Title
		this.Year = Year
		this.imdbRating = imdbRating
		this.Genre = Genre
		this.Actors = Actors
		this.Plot = Plot
		this.Poster = Poster
		this.Runtime = Runtime
		this.Country = Country
		this.Writer = Writer
		this.Response = Response
	}
}

export default MovieLocal
