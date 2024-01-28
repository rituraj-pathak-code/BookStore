import { Router } from 'express'
import { Book } from '../models/bookModel.js'
import { createBook, getAllBooks,getBookById,updateBook,deleteBook } from '../controllers/booksController.js'

const router = Router()

router.post('/', createBook )

router.get('/', getAllBooks)

router.get('/:id', getBookById )

router.put('/:id', updateBook)

router.delete('/:id', deleteBook)

export default router