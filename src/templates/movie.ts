import MovieLocal from "../models/movies/MovieLocal"

export const getMovieHTML = (movie: MovieLocal, node: HTMLElement) => {
	const { Poster, Title, Writer, Country, Plot, Actors, imdbRating, Year, Runtime, Genre } = movie

	node.innerHTML = `
            <div id="movie-container">
            <div id="movie-topside">
                <div id="movie-img">
                    <img
                        src=${Poster === "N/A" ? "/assets/image_not_found.png" : Poster}
                    />
                </div>
                <div id="movie-infos-topside">
                    <h2>${Title}</h2>
                    <p id="year-duration">${Year} - ${Runtime}</p>
                    <div id="rating">
                        ${imdbRating}
                        <img id="star" src="../assets/star.png" alt="rating" />
                    </div>
                    <div id="genres"> 
                        ${Genre.map((genre) => `<div class="tag">${genre}</div>`).join("")}
                    </div>
                    <p id="country"><span class="label-infos">Country:</span> ${Country}</p>
                </div>
            </div>
            <div id="movie-botside">
                <p class="bloc-text">
                    <span class="label-infos">Writer:</span> ${Writer}
                </p>
                <p class="bloc-text">
                    <span class="label-infos">Plot:</span>
                    ${Plot}
                </p>
                <p class="bloc-text">
                    <span class="label-infos">Actors:</span>
                    ${Actors}
                </p>
            </div>
        </div>
    `
}
