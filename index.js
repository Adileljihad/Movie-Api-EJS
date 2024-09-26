import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

import express from 'express';
import dotenv from 'dotenv';

import createLog from './middleware/createLog.js';

import movieRoutes from './routes/movie.js';

// Load environment variables
dotenv.config();

const PORT = process.env.PORT || 5003;

// Construct path
const __filename = fileURLToPath(import.meta.url);
const PATH = dirname(__filename);

// initialize express
const app = express();

// Serve static files (CSS, JS, images, etc.)
app.use(express.static(path.join(PATH, 'public')));

// Set view engine
app.set('view engine', 'ejs');
app.set('views', path.join(PATH, 'views'));

// Parse request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware
app.use(createLog);

// Routes
app.use('/api', movieRoutes);

// Handle 404
app.use('*', (req, res) => {
    res.status(404).render('404', {
        title: '404',
        message: 'Page not Found'
    });
});

// Handle error

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).render('500', {
        title: '500',
        message: 'Internal Server Error'
    });
});

// Listen to port
app.listen(PORT, () => {
    console.log(`Server running on port: http://localhost: ${PORT}`);
});
