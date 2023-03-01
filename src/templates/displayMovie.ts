import MovieLocal from "../models/MovieLocal"

export const getMovieHTML = (movie: MovieLocal, node: HTMLElement) => {
	node.innerHTML = `
            <div id="movie-container">
            <div id="movie-topside">
                <div id="movie-img">
                    <img
                        src=${
							movie.Poster === "N/A" ? "../assets/image_not_found.png" : movie.Poster
						}
                    />
                </div>
                <div id="movie-infos-topside">
                    <h2>${movie.Title}</h2>
                    <p id="year-duration">${movie.Year} - ${movie.Runtime}</p>
                    <div id="rating">
                        ${movie.imdbRating}
                        <img id="star" src="../assets/star.png" alt="rating" />
                    </div>
                    <div id="genres"> 
                        ${movie.Genre.map((genre) => `<div class="tag">${genre}</div>`).join("")}
                    </div>
                    <p id="country"><span class="label-infos">Country:</span> ${movie.Country}</p>
                </div>
            </div>
            <div id="movie-botside">
                <p class="bloc-text">
                    <span class="label-infos">Writer:</span> ${movie.Writer}
                </p>
                <p class="bloc-text">
                    <span class="label-infos">Plot:</span>
                    ${movie.Plot}
                </p>
                <p class="bloc-text">
                    <span class="label-infos">Actors:</span>
                    ${movie.Actors}
                </p>
            </div>
        </div>
    `
}
