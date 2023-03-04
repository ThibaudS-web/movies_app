var A=Object.defineProperty;var L=(i,e,t)=>e in i?A(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var r=(i,e,t)=>(L(i,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(s){if(s.ep)return;s.ep=!0;const n=t(s);fetch(s.href,n)}})();const p="eae32b44";class b{async getMovieByName(e){let t,o=`https://www.omdbapi.com/?t=${e}&apikey=${p}`;try{return t=await(await fetch(o)).json(),t}catch(s){throw new Error("Error API: ",s)}}async getMoviesList(e){let t,o=`https://www.omdbapi.com/?s=${e}&apikey=${p}`;try{return t=(await(await fetch(o)).json()).Search,t}catch(s){throw new Error("Error API: ",s)}}async getMovieByID(e){let t,o=`https://www.omdbapi.com/?i=${e}&apikey=${p}`;try{return t=await(await fetch(o)).json(),t}catch(s){throw new Error("Error API: ",s)}}}const w=i=>{i.innerHTML="<h2 class='error-message'>Enter a title please</h2>"},T=i=>{i.innerHTML="<h2 class='error-message'>Problem occured, try later...</h2>"},y=(i,e)=>{const{Poster:t,Title:o,Writer:s,Country:n,Plot:a,Actors:m,imdbRating:d,Year:u,Runtime:v,Genre:h}=i;e.innerHTML=`
            <div id="movie-container">
            <div id="movie-topside">
                <div id="movie-img">
                    <img
                        src=${t==="N/A"?"/assets/image_not_found.png":t}
                    />
                </div>
                <div id="movie-infos-topside">
                    <h2>${o}</h2>
                    <p id="year-duration">${u} - ${v}</p>
                    <div id="rating">
                        ${d}
                        <img id="star" src="../assets/star.png" alt="rating" />
                    </div>
                    <div id="genres"> 
                        ${h.map(M=>`<div class="tag">${M}</div>`).join("")}
                    </div>
                    <p id="country"><span class="label-infos">Country:</span> ${n}</p>
                </div>
            </div>
            <div id="movie-botside">
                <p class="bloc-text">
                    <span class="label-infos">Writer:</span> ${s}
                </p>
                <p class="bloc-text">
                    <span class="label-infos">Plot:</span>
                    ${a}
                </p>
                <p class="bloc-text">
                    <span class="label-infos">Actors:</span>
                    ${m}
                </p>
            </div>
        </div>
    `},E=i=>{i.innerHTML="<h2 class='error-message'>Movie not found!</h2>"},$=i=>{const{Title:e,Year:t,Poster:o,imdbID:s}=i;return`
            <li class="item-list" data-imdbID=${s} >
                <img
                    class="img-item-movie"
                    src="${o==="N/A"?"/assets/image_not_found.png":o}"
                    alt="${e} movie"
                />
                <span>${e} (${t})</span>
            </li>
        `},R=(i,e)=>{const t=document.createElement("ul");t.setAttribute("id","movies-list"),t.innerHTML=e.map(o=>$(o)).join(""),i.append(t)};class N{constructor(e,t,o,s,n,a,m,d,u,v,h){r(this,"Title");r(this,"Year");r(this,"imdbRating");r(this,"Genre");r(this,"Actors");r(this,"Plot");r(this,"Poster");r(this,"Runtime");r(this,"Country");r(this,"Writer");r(this,"Response");this.Title=e,this.Year=t,this.imdbRating=o,this.Genre=s,this.Actors=n,this.Plot=a,this.Poster=m,this.Runtime=d,this.Country=u,this.Writer=v,this.Response=h}}class H{constructor(e){r(this,"movieAPI");this.movieAPI=e}mapAPIToLocal(){return new N(this.movieAPI.Title,this.movieAPI.Year,this.movieAPI.imdbRating,this.stringToArrayGenre(this.movieAPI.Genre),this.movieAPI.Actors,this.movieAPI.Plot,this.movieAPI.Poster,this.movieAPI.Runtime,this.movieAPI.Country,this.movieAPI.Writer,this.movieAPI.Response)}stringToArrayGenre(e){return e.split(",").map(t=>t.trim())}}class B{constructor(e,t,o,s){r(this,"Title");r(this,"Year");r(this,"imdbID");r(this,"Poster");this.Title=e,this.Year=t,this.imdbID=o,this.Poster=s}}class D{constructor(e){r(this,"shortMovieAPI");this.shortMovieAPI=e}mapAPIToLocal(){return new B(this.shortMovieAPI.Title,this.shortMovieAPI.Year,this.shortMovieAPI.imdbID,this.shortMovieAPI.Poster)}}const f=new b,g=document.getElementById("search-btn"),l=document.getElementById("search-movie"),c=document.getElementById("result"),Y=document.getElementById("search");function C(){var i;(i=document.querySelectorAll(".item-list"))==null||i.forEach(e=>{e.addEventListener("click",()=>{f.getMovieByID(e.dataset.imdbid).then(t=>{y(P(t),c)})})})}function P(i){return new H(i).mapAPIToLocal()}function I(){var i;(i=document.getElementById("movies-list"))==null||i.remove(),l.classList.remove("active-list-movies")}function O(i){const e=i.value.trim();if(e.length===0){w(c);return}f.getMovieByName(e).then(t=>{t.Response=="True"?y(P(t),c):(console.log(t.Response),E(c))}).catch(()=>{T(c)})}function G(i){const e=i.target.value;e.length>=3?f.getMoviesList(e).then(t=>{var s;if(t===void 0)return;l.setAttribute("class","active-list-movies"),(s=document.getElementById("movies-list"))==null||s.remove();const o=t.map(n=>new D(n).mapAPIToLocal());R(Y,o),C()}):I()}g==null||g.addEventListener("click",()=>{O(l),l.value=""});l.addEventListener("input",i=>{G(i)});window.addEventListener("click",()=>I());
