import express from "express";
import { createBook, getBooks, getBook, updateBook, deleteBook } from '../controllers/bookController.js';
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route('/').post(protect, createBook).get(getBooks);
router.route('/:id').get(getBook).put(protect, updateBook).delete(protect, deleteBook);

export const bookRoutes = router;