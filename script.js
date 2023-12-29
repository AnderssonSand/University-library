const booksContainer = document.getElementById("books-container");
let books = [];

fetch("data.json")
  .then((res) => res.json())
  .then((data) => {
    books = data.library;
    books.forEach((item) => {
      const card = document.createElement("div");
      card.className = "bookCard";
      card.innerHTML = `<div class="card">          
      <img src="${item.image_url}" 
      class="card-img-top" alt="Image 1">          
      <div class="card-body">          
      <h5 class="card-title">${item.title}</h5>            
      <h6 class="card-text card-author">${item.author}</h6>            
      <p class="card-text card-year">${item.publication_year}</p>  
      <p class="card-text">${item.desc}</p>  
      <button class="btn card-button" id="delete-book-btn"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
      <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"/>
      </svg></button>        
      </div>`;
      booksContainer.append(card);
      const deleteBookBtn = card.querySelector("#delete-book-btn");
      deleteBookBtn.addEventListener("click", () => {
        card.remove();
      });
    });
  })
  .catch((err) => console.log("error" + err));

const addBookBtn = document.getElementById("add-book");
const BookPubYear = document.getElementById("publication-year");
const bookAuthor = document.getElementById("author");
const bookTitle = document.getElementById("title");
const imgUrl = document.getElementById("image-url");
const dropDown = document.getElementById("inputGroupSelect02");
const submitMessage = document.getElementById("submitMessage");
const bookDesc = document.getElementById("description");
let regex = RegExp("");

function addBook(e) {
  e.preventDefault();
  let year = BookPubYear.value;
  let author = bookAuthor.value;
  let title = bookTitle.value;
  let genre = dropDown.value;
  let desc = bookDesc.value;

  //om allt är ifylly så skickas det else har ett errormessage skapas
  if (year && author && title && imgUrl.value && genre) {
    let card = document.createElement("div");
    card.className = "bookCard";
    card.innerHTML = `<div class="card">          
<img src="${imgUrl.value}" 
class="card-img-top" alt="Image 1">          
<div class="card-body">            
<h5 class="card-title">${title}</h5>            
<h6 class="card-text">${author}</h6>            
<p class="card-text">${year}</p>  
<p class="card-text">${genre}</p>
<p class="card-text">${desc}</p>
<button class="btn card-button" id="delete-book-btn"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
<path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"/>
</svg></button>        
</div>`;

    booksContainer.appendChild(card);

    submitMessage.className = "success-message";
    submitMessage.textContent =
      "Tack för ditt bidrag! Du har nu lagt till en bok i biblioteket!";

    const deleteBookBtn = card.querySelector("#delete-book-btn");
    deleteBookBtn.addEventListener("click", () => {
      card.remove();
    });
  } else {
    let errorMessage = "Se till att fylla i alla fälten.";
    submitMessage.className = "error-message";

    submitMessage.textContent = errorMessage;

    console.log("fill in all of the fields");
  }
}

//addera bok på click
addBookBtn.addEventListener("click", addBook);
