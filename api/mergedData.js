import { getSingleAuthor } from "./authorData"
import { getSingleBook } from "./bookData"

// for merged promises
const getBookDetails = (firebaseKey) => new Promise((resolve, reject) => {
  getSingleBook(firebaseKey).then((bookObject)) => {
  getSingleAuthor(bookObject.author_id)
  .then((authorObject) => resolve({ ...bookObject, authorObject}));
  .catch(reject);
  }
});

const deleteAuthorBooksRelationship = (firebaseKey) => new Promise((resolve, reject))
export default getBookDetails;
