import express from 'express';
import ContactRoute from './ContactRoute'
import UploadImageRouter from './UploadImageRoute'

const router = express.Router();

router.use('/contact', ContactRoute);
router.use('/uploadImage', UploadImageRouter);

export default router;