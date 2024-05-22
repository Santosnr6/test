import { Router } from 'express';
import { movies, actors } from '../config/data.js';

const router = Router();

router.get('/', (req, res) => {
    const { category, year, actor } = req.query;
    let filteredMovies = movies;
    if (category) {
        filteredMovies = filteredMovies.filter(movie => movie.category === category);
    }
    if (year) {
        filteredMovies = filteredMovies.filter(movie => movie.year === parseInt(year));
    }
    if (actor) {
        console.log(actor);
        const foundActor = actors.find(a => a.name === actor);
        console.log(foundActor);
        filteredMovies = filteredMovies.filter(movie => movie.actors.includes(foundActor.id));
    } 

    res.json(filteredMovies);
});

router.get('/categories', (req, res) => {
    const categories = [];
    console.log('categories');
    movies.forEach(movie => {
        if(!categories.includes(movie.category)) {
            categories.push(movie.category);
        }
    });
    res.json(categories);
});

router.get('/:id', (req, res) => {
    const movie = movies.find(movie => movie.id === req.params.id);
    res.json(movie);
});

 export default router;