import express from 'express';
import ContactRoute from './ContactRoute'

const router = express.Router();

router.use('/contact', ContactRoute);

export default router;