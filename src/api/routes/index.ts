import express from 'express';
import bodyParser from 'body-parser';
import genreRoutes from './genreRoutes';
import directorRoutes from './directorRoutes';
import movieRoutes from './movieRoutes';
import authRoutes from './authRoutes';
const router = express.Router();

router.use(bodyParser.urlencoded({ extended : true}));

router.use(bodyParser.json());

router.use ('/genres', genreRoutes);
router.use('/director',directorRoutes);
router.use('/movie',movieRoutes);
router.use('/auth',authRoutes);

export default router;