import findMovie from '../utils/findMovie.js';

let movies = [
    {
        id: '1',
        title: 'John Wick',
        logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxTwg5yf7KrhnxwEUyAlWfSg48L3yJcPTtjA&s',
        director: 'Frank Freeman',
        year: 2000
    },

    {
        id: '2',
        title: 'Inception',
        logo: 'https://i1.sndcdn.com/artworks-000262659968-e5dcg1-t500x500.jpg',
        director: 'Christopher Nolan',
        year: 2010
    },

    {
        id: '3',
        title: 'The Dark Knight',
        logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUK7Q85Hpql3uKDuXtbtWxUPZ4SMRMCQYqgA&s',
        director: 'Christopher Nolan',
        year: 2008
    }
];

class Movie {
    static getAll = () => {
        return movies;
    };

    static getById = (id) => {
        return findMovie(movies, id);
    };

    static add = (movie) => {
        movies.push(movie);
        return movie;
    };

    static update = (movie, id) => {
        const movieExists = findMovie(movies, id);
        if (movieExists) {
            movieExists.title = movie.title;
            movieExists.director = movie.director;
            movieExists.year = movie.year;
            movieExists.logo = movie.logo;
            return movieExists;
        } else {
            return null;
        }
    };

    static delete = (id) => {
        const movieExists = findMovie(movies, id);
        if (movieExists) {
            movies = movies.filter((movie) => movie.id === id);
            return movies;
        } else {
            return null;
        }
    };
}

export default Movie;
