import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const viewAuthor = (obj) => {
  clearDom();
  let domString = `
  <div class="mt-5 d-flex flex-wrap">
  <div class="d-flex flex-column">
   <h1> ${obj.first_name} ${obj.last_name} ${obj.favorite ? '<span class="badge bg-danger"><i class="fa fa-heart" aria-hidden="true"></i></span>' : ''}</h1>
   Author Email: <a href="mailto:${obj.email}">${obj.email}</a>
  </div>;`;

  obj.authorBooks.map((book) => {
    domString += `<div class="text-white ms-5 details">
      <h5>${book.title}  ${book.favorite ? '<span class="badge bg-danger"><i class="fa fa-heart" aria-hidden="true"></i></span>' : ''}</h5>
      <p>${book.description || ''}</p>
      <hr>
      <p>${book.sale ? `<span class="badge bg-info sale-badge"><i class="fa fa-bell" aria-hidden="true"></i> Sale</span>
        $${book.price}` : `$${book.price}`}</p>
       </div>
       </div>`;
    return renderToDOM('#view', domString);
  });
};

export default viewAuthor;
