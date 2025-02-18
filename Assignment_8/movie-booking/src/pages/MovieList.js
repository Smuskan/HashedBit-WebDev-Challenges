import React from "react";
import { Link } from "react-router-dom";
import "./MovieList.css"; // For styling

const movies = [
    { id: 1, title: "Sanam Teri Kasam", image: "https://m.media-amazon.com/images/I/81ocdq98b8L._AC_UF1000,1000_QL80_.jpg" }, //sanam teri kasam
    { id: 2, title: "Laila Majnu", image: "https://resizing.flixster.com/CfgdOblGtD5yu5MAOcGzNKWwdLY=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzYzZGExODcwLTAzNWYtNGNiMC04OTUwLTVkMTk5YjRkMmZmNS53ZWJw" }, // laila Majnu
    { id: 3, title: "Rockstar", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjOr-fKE9bIziczwx962sYnmEMlNybj0DNjA&s" }, //Rockstar Movie
    { id: 4, title: "Zero", image: "https://m.media-amazon.com/images/I/816YpgC5GoL._AC_UF1000,1000_QL80_.jpg" }, //1920 London
    { id: 5, title: "Dunki", image: "https://www.boxofficemovies.in/now/wp-content/uploads/Anushka-Sharma-and-Shahrukh-Khan-starrer-ZERO-movie-poster.jpg" }, //Zero
    { id: 6, title: "Dangal", image: "https://i.ebayimg.com/images/g/CT4AAOSw9WFliW0L/s-l400.png" }, //Dunki
    { id: 7, title: " jab we Met", image: "https://i.pinimg.com/236x/56/ab/71/56ab71debf6292019f940d081f3305e5.jpg" }, //Dangal
    { id: 8, title: "Barfi", image: "https://hippy.in/wp-content/uploads/2014/06/custom-hand-painted-bollywood-posters-2.jpg" }, // jab we Met
    { id: 9, title: "Devdas", image: "https://stat5.bollywoodhungama.in/wp-content/uploads/2016/03/74637364.jpg" }, //Barfi
    { id: 10, title: "kabil", image: "https://m.media-amazon.com/images/I/91GONzCyOcL._AC_UF894,1000_QL80_.jpg" }, //Devdas
    { id: 11, title: "Furkey", image: "https://i.pinimg.com/originals/b4/26/5b/b4265ba7720dc372da6bc847a6d2e31d.png" }, //kabil
    { id: 12, title: "Meri Pyari Bindu", image: "https://bollywoodmovieposters.com/wp-content/uploads/2024/05/hindi-comedy-posters-fukrey-2013.jpg" }, //Furkey
    { id: 13, title: "Sanju", image: "https://www.boxofficemovies.in/now/wp-content/uploads/Meri-Pyaari-Bindu-movie-poster.jpg" }, //meri pyari bindu
    { id: 14, title: "Sanju", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6nsUPO-vJsI6BD5C2K7iQnn6OS2-FOxeq18ypUnQXy42uxE62UZJSAYpjo-NNNJSryGk&usqp=CAU" }, //Sanju
    { id: 15, title: "PK", image: "https://bollywoodmovieposters.com/wp-content/uploads/2021/11/pk-movie-aamir-khan-poster.jpg" }, //Pk
    { id: 16, title: "3 Idiots", image: "https://www.tallengestore.com/cdn/shop/products/3_Idiots_-_Aamir_Khan_Bollywood_Cult_Classic_Hindi_Movie_Poster_f203b140-8e01-4a5c-8c1a-a7819f566e7e.jpg?v=1544769928" }, // 3 idiots
];

const MovieList = () => {
    return ( <
        div className = "movie-list" > {
            movies.map((movie) => ( <
                div key = { movie.id }
                className = "movie-card" >
                <
                img src = { movie.image }
                alt = { movie.title }
                /> <
                h3 > { movie.title } < /h3> <
                Link to = { `/movie/${movie.id}` } > View Details < /Link> < /
                div >
            ))
        } <
        /div>
    );
};

export default MovieList;