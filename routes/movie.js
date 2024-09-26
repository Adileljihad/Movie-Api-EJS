import express from 'express';

import movieControllers from '../controllers/movie.js';

const router = express.Router();

const { getAllMovies, getMovieById, addMovie, removeMovie, addMovieForm } =
    movieControllers;

// routes

router.get('/get', getAllMovies);
router.get('/get/:id', getMovieById);
router.get('/add', addMovieForm);
router.post('/add', addMovie);
router.delete('/delete/:id', removeMovie);

export default router;
