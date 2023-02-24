// for merged promise

// import client from '../utils/client';
import { deleteSingleAuthor, getSingleAuthor } from './authorData';
import { deleteBook, getBooksByAuthor, getSingleBook } from './bookData';
// API CALLS FOR BOOKS

// const endpoint = client.databaseURL;

const getBookDetails = (firebaseKey) => new Promise((resolve, reject) => {
  getSingleBook(firebaseKey).then((bookObj) => {
    getSingleAuthor(bookObj.author_id).then((authorObject) => resolve({ ...bookObj, authorObject }));
  })
    .catch(reject);
});

const getAuthorBooks = async (firebaseKey) => {
  const author = await getSingleAuthor(firebaseKey);
  const authorBooks = await getBooksByAuthor(author.firebaseKey);

  return { ...author, authorBooks };
};

// const getBookDetails = async (firebaseKey) => {
//   const bookObject = await getSingleBook(firebaseKey);
//   const authorObject = await getSingleAuthor(bookObject.author_id);

//   return { ...bookObject, authorObject };
// };

const deleteAuthorBooksRelationship = (firebaseKey) => new Promise((resolve, reject) => {
  getBooksByAuthor(firebaseKey).then((booksArray) => {
    const deleteBookPromises = booksArray.map((book) => deleteBook(book.firebaseKey));
    Promise.all(deleteBookPromises).then(() => {
      deleteSingleAuthor(firebaseKey).then(resolve);
    });
  })
    .catch(reject);
});

export { getBookDetails, getAuthorBooks, deleteAuthorBooksRelationship };
