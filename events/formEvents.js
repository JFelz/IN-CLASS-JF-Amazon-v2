import { createBook, getBooks, updateBook } from '../api/bookData';
import { showBooks } from '../pages/books';
import { createAuthor, updateAuthor, getAuthors } from '../api/authorData';
import { showAuthors } from '../pages/authors';

const formEvents = () => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();
    // TODO: CLICK EVENT FOR SUBMITTING FORM FOR ADDING A BOOK
    if (e.target.id.includes('submit-book')) {
      console.warn('CLICKED SUBMIT BOOK', e.target.id);
      const payload = {
        title: document.querySelector('#title').value,
        description: document.querySelector('#description').value,
        image: document.querySelector('#image').value,
        price: document.querySelector('#price').value,
        sale: document.querySelector('#sale').checked,
      };
      createBook(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };
        updateBook(patchPayload).then(() => {
          getBooks().then(showBooks);
        });
      });
    }

    // TODO: CLICK EVENT FOR EDITING A BOOK
    if (e.target.id.includes('update-book')) {
      const [, firebaseKey] = e.target.id.split('--');
      console.warn('CLICKED UPDATE BOOK', e.target.id);
      console.warn(firebaseKey);
      const payload = {
        title: document.querySelector('#title').value,
        description: document.querySelector('#description').value,
        image: document.querySelector('#image').value,
        price: document.querySelector('#price').value,
        author_id: document.querySelector('#author_id').value,
        sale: document.querySelector('#sale').checked,
        firebaseKey,
      };

      updateBook(payload).then(() => {
        getBooks().then(showBooks);
      });
    }

    // FIXME: ADD CLICK EVENT FOR SUBMITTING FORM FOR ADDING AN AUTHOR
    if (e.target.id.includes('submit-author')) {
      console.warn('CLICKED SUBMIT AUTHOR');
      const payload = {
        email: document.querySelector('#email').value,
        favorite: document.querySelector('#favorite').value,
        first_name: document.querySelector('#first_name').value,
        last_name: document.querySelector('#last_name').value,
      };
      // console.warn(payload);
      createAuthor(payload).then(({ name }) => {
        const patchPayLoad = { firebaseKey: name };
        updateAuthor(patchPayLoad).then(() => {
          getAuthors().then(showAuthors);
        });
      });
    }
    // FIXME:ADD CLICK EVENT FOR EDITING AN AUTHOR
  });
};

export default formEvents;
