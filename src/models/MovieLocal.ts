class MovieLocal {
	Title: string
	Year: string
	Ratings: string
	Genre: Array<string>
	Actors: string
	Plot: string
	Poster: string

	constructor(
		Title: string,
		Year: string,
		Ratings: string,
		Genre: Array<string>,
		Actors: string,
		Plot: string,
		Poster: string
	) {
		this.Title = Title
		this.Year = Year
		this.Ratings = Ratings
		this.Genre = Genre
		this.Actors = Actors
		this.Plot = Plot
		this.Poster = Poster
	}
}

export default MovieLocal
