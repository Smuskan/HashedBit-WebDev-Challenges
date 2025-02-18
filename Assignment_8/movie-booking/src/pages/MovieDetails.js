import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./MovieDetails.css"; // For styling

const movies = [
    { id: 1, title: "Sanam Teri Kasam", image: "https://m.media-amazon.com/images/I/81ocdq98b8L._AC_UF1000,1000_QL80_.jpg", description: "A heartbreaking love story that will move you to tears." },
    { id: 2, title: "Laila Majnu", image: "https://c.ndtvimg.com/ve4bq92o_imtiaz-ali_625x300_24_July_18.jpg", description: "A modern take on the classic tale of love and separation." },
    { id: 3, title: "Rockstar", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjOr-fKE9bIziczwx962sYnmEMlNybj0DNjA&s", description: "A journey of passion, music, and heartbreak." },
    { id: 4, title: "1920 London", image: "https://m.media-amazon.com/images/I/816YpgC5GoL._AC_UF1000,1000_QL80_.jpg", description: "A horror thriller set in the eerie backdrop of London." },
    { id: 5, title: "Zero", image: "https://www.boxofficemovies.in/now/wp-content/uploads/Anushka-Sharma-and-Shahrukh-Khan-starrer-ZERO-movie-poster.jpg", description: "A tale of love, dreams, and self-discovery." },
    { id: 6, title: "Dunki", image: "https://i.ebayimg.com/images/g/CT4AAOSw9WFliW0L/s-l400.png", description: "A gripping story about immigration and human emotions." },
    { id: 7, title: "Dangal", image: "https://i.pinimg.com/236x/56/ab/71/56ab71debf6292019f940d081f3305e5.jpg", description: "An inspiring tale of a father and his daughters conquering wrestling." },
    { id: 8, title: "Jab We Met", image: "https://hippy.in/wp-content/uploads/2014/06/custom-hand-painted-bollywood-posters-2.jpg", description: "A feel-good romantic journey of two strangers." },
    { id: 9, title: "Barfi", image: "https://stat5.bollywoodhungama.in/wp-content/uploads/2016/03/74637364.jpg", description: "A heartwarming story of love and innocence." },
    { id: 10, title: "Devdas", image: "https://m.media-amazon.com/images/I/91GONzCyOcL._AC_UF894,1000_QL80_.jpg", description: "A classic tragic love story of Devdas and Paro." },
    { id: 11, title: "Kaabil", image: "https://i.pinimg.com/originals/b4/26/5b/b4265ba7720dc372da6bc847a6d2e31d.png", description: "A blind man's quest for justice and revenge." },
    { id: 12, title: "Fukrey", image: "https://bollywoodmovieposters.com/wp-content/uploads/2024/05/hindi-comedy-posters-fukrey-2013.jpg", description: "A fun-filled comedy about four carefree friends." },
    { id: 13, title: "Meri Pyaari Bindu", image: "https://www.boxofficemovies.in/now/wp-content/uploads/Meri-Pyaari-Bindu-movie-poster.jpg", description: "A nostalgic romance that takes you back in time." },
    { id: 14, title: "Sanju", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6nsUPO-vJsI6BD5C2K7iQnn6OS2-FOxeq18ypUnQXy42uxE62UZJSAYpjo-NNNJSryGk&usqp=CAU", description: "The unbelievable real-life story of Bollywood's bad boy." },
    { id: 15, title: "PK", image: "https://bollywoodmovieposters.com/wp-content/uploads/2021/11/pk-movie-aamir-khan-poster.jpg", description: "A thought-provoking comedy that questions society." },
    { id: 16, title: "3 Idiots", image: "https://www.tallengestore.com/cdn/shop/products/3_Idiots_-_Aamir_Khan_Bollywood_Cult_Classic_Hindi_Movie_Poster_f203b140-8e01-4a5c-8c1a-a7819f566e7e.jpg?v=1544769928", description: "A must-watch comedy-drama about friendship and education." },
];

const MovieDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const movie = movies.find((m) => m.id === parseInt(id));

    if (!movie) {
        return <h2 > Movie not found < /h2>;
    }

    return ( <
        div className = "movie-details" >
        <
        img src = { movie.image }
        alt = { movie.title }
        /> <
        h2 > { movie.title } < /h2> <
        p > { movie.description } < /p> <
        button onClick = {
            () => navigate(`/book/${movie.id}`) } > Book Seat < /button> <
        /div>
    );
};

export default MovieDetails;