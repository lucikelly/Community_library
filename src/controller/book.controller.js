import bookService from "../service/book.service.js";


async function createBookController(req, res) {
  const newBook = req.body
  const userId = req.userId

  try {
    const createdBook = await bookService.createBookService(newBook, userId)
    res.status(201).send(createdBook)
  } catch (e) {
    res.status(400).send(e.message)
  }
}


async function findAllBooksController(req, res ) {
  try {
    const books = await bookService.findAllBoocksService()
    res.send(books)
  } catch (e) {
    res.status(400).send(e.message)
  }
}
export default {
  createBookController,
  findAllBooksController

}