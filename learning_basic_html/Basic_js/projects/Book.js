function Book(title, author, pages, read) {
    if(!new.target) {
        throw Error("You must use the 'new' keyword to call the constructor");
    }
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        console.log(`${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`);
    };
}

const book = new Book("The Great Gatsby", "F. Scott Fitzgerald", 180, "not read yet");
book.info();