function Book(title, author, pages, read) {
  if (!new.target) {
    throw new Error("You must use the 'new' keyword to create a book");
  }

  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.toggleRead = function () {
  this.read = !this.read;
};