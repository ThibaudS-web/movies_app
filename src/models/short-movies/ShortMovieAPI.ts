class ShortMovieAPI {
	Title: string
	Year: string
	imdbID: string
	Type: string
	Poster: string
	constructor(Title: string, Year: string, imdbID: string, Type: string, Poster: string) {
		this.Title = Title
		this.Year = Year
		this.imdbID = imdbID
		this.Type = Type
		this.Poster = Poster
	}
}

export default ShortMovieAPI
