import FetchMovie from "./service/FetchMovie"
import MovieMapper from "./UI/mapper/MovieMapper"

const fetchMovie = new FetchMovie()
const result = await fetchMovie.getMovie("terminator")
const mapperMovie = new MovieMapper(result).mapAPIToLocal()
console.log(mapperMovie)
console.log(mapperMovie.Ratings)

