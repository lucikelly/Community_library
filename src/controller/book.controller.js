import bookService from "../service/book.service.js";

async function createBookController(req, res) {
  const newBook = req.body;
  const userId = req.userId;

  try {
    const createdBook = await bookService.createBookService(newBook, userId);
    res.status(201).send(createdBook);
  } catch (e) {
    res.status(400).send(e.message);
  }
}

async function findAllBooksController(req, res) {
  try {
    const books = await bookService.findAllBoocksService();
    res.send(books);
  } catch (e) {
    res.status(400).send(e.message);
  }
}

async function findBookByIdcontroller(req, res) {
  const bookId = req.params.id;
  try {
    
    const book = await bookService.findBookByIdService(bookId);
    return res.send(book);
  } catch (e) {
    return res.status(400).send(e.message);
  }
}

async function updateBookController(req, res) {
 
  const updateBook = req.body;
  const bookId = req.params.id;
  const userId = req.userId;
  
  try {

    const response = await bookService.updateBookService(
      updateBook,
      bookId,
      userId
    );
    return res.send(response);
  } catch (e) {
    return res.status(400).send(e.message);
  }
  
}



async function deleteBookcontroller(req, res) {

  const bookId = req.params.id;
  const userId = req.userId;
  try {
  
    const response = await bookService.deleteBookService(bookId, userId);
    return res.send(response);
  } catch (e) {
    return res.status(400).send(e.message);
  }
}

async function searchBooksController(req, res) {
  const { search } = req.query

  try {
    const books = await bookService.searchBooksService(search)
    res.send(books)
  } catch (e) {
    res.status(400).send(e.message)
  }
}

export default {
  createBookController,
  findAllBooksController,
  findBookByIdcontroller,
  updateBookController,
  deleteBookcontroller,
  searchBooksController
};
