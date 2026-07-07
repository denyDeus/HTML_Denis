const myLibrary = [];

function addBookToLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  return newBook;
}

function renderLibrary() {
  const libraryGrid = document.querySelector("#libraryGrid");

  if (!libraryGrid) return;

  if (myLibrary.length === 0) {
    libraryGrid.innerHTML = "<div class='empty-state'>No books added yet. Click 'New Book' to get started.</div>";
    return;
  }

  libraryGrid.innerHTML = myLibrary
    .map(
      (book) => `
        <article class="book-card" data-id="${book.id}">
          <h3>${book.title}</h3>
          <p class="meta">by ${book.author}</p>
          <p class="meta">${book.pages} pages</p>
          <span class="status ${book.read ? "read" : "unread"}">
            ${book.read ? "Read" : "Not read"}
          </span>
          <div class="card-actions">
            <button class="toggle-btn" data-action="toggle">${book.read ? "Mark as unread" : "Mark as read"}</button>
            <button class="remove-btn" data-action="remove">Remove</button>
          </div>
        </article>
      `
    )
    .join("");
}

function showForm() {
  const formPanel = document.querySelector("#formPanel");
  if (formPanel) {
    formPanel.classList.add("show");
    formPanel.setAttribute("aria-hidden", "false");
  }
}

function hideForm() {
  const formPanel = document.querySelector("#formPanel");
  if (formPanel) {
    formPanel.classList.remove("show");
    formPanel.setAttribute("aria-hidden", "true");
  }
}

function handleBookSubmit(event) {
  event.preventDefault();

  const title = document.querySelector("#title").value.trim();
  const author = document.querySelector("#author").value.trim();
  const pages = Number(document.querySelector("#pages").value);
  const read = document.querySelector("#read").checked;

  if (!title || !author || !pages) {
    return;
  }

  addBookToLibrary(title, author, pages, read);
  renderLibrary();
  event.target.reset();
  hideForm();
}

function handleLibraryClick(event) {
  const button = event.target.closest("button[data-action]");
  if (!button) return;

  const card = button.closest(".book-card");
  if (!card) return;

  const bookId = card.dataset.id;
  const book = myLibrary.find((item) => item.id === bookId);

  if (!book) return;

  if (button.dataset.action === "remove") {
    const index = myLibrary.findIndex((item) => item.id === bookId);
    if (index !== -1) {
      myLibrary.splice(index, 1);
      renderLibrary();
    }
  }

  if (button.dataset.action === "toggle") {
    book.toggleRead();
    renderLibrary();
  }
}

function initializeLibrary() {
  addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 310, true);
  addBookToLibrary("1984", "George Orwell", 328, false);

  renderLibrary();

  document.querySelector("#newBookBtn")?.addEventListener("click", showForm);
  document.querySelector("#cancelBtn")?.addEventListener("click", hideForm);
  document.querySelector("#bookForm")?.addEventListener("submit", handleBookSubmit);
  document.querySelector("#libraryGrid")?.addEventListener("click", handleLibraryClick);
}

initializeLibrary();

const bookShelf = [];

function saveBookToShelf(details) {
  const book = {
    id: crypto.randomUUID(),
    title: details.title.trim(),
    author: details.author.trim(),
    pages: Number(details.pages),
    read: Boolean(details.read)
  };

  bookShelf.push(book);
  return book;
}

const addedBook = saveBookToShelf({
  title: "The Alchemist",
  author: "Paulo Coelho",
  pages: 208,
  read: true
});

console.log(bookShelf);
console.log(addedBook.id);