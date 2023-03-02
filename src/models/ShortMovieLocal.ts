class ShortMovieLocal {
	Title: string
	Year: string
	imdbID: string
	Poster: string 
	constructor(Title: string, Year: string, imdbID: string, Poster: string) {
		this.Title = Title
		this.Year = Year
		this.imdbID = imdbID
		this.Poster = Poster
	}
}

export default ShortMovieLocal
