class Book {
    #title;
    #author;
    #publishedYear;
    #isRead;

    constructor(title, author, publishedYear, isRead) {

        this.#author = author
        this.#isRead = isRead
        this.#publishedYear = publishedYear
        this.#title = title

    }

    get title() {
        return this.#title;
    }

    set title(value) {
        this.#title = value;
    }

    get author() {
        return this.#author;
    }

    set author(value) {
        this.#author = value;
    }

    get publishedYear() {
        return this.#publishedYear;
    }

    set publishedYear(value) {
        this.#publishedYear = value;
    }

    get isRead() {
        return this.#isRead;
    }

    set isRead(value) {
        this.#isRead = value;
    }

    showInfo() {
        console.log("Titlte: " + this.title)
        console.log("Author: " + this.author)
        console.log("Published year: " + this.publishedYear)
        console.log("Is read: " + this.isRead)
        console.log("-----------------------")
    }
}

class Library {
    books = [];

    addBook(book) {
        this.books.push(book);
    }

    removeBookOnTitle(title) {
        this.books.filter(b => b.title !== title);
    }

    listBook() {
        this.books.forEach(b => b.showInfo())
    }

    markAsRead(bookTitle) {
        const book = this.books.find(b => b.title === bookTitle)
        if (book) {
            book.isRead = true;
        }

    }

    markAsUnread(bookTitle) {
        const book = this.books.find(b => b.title === bookTitle)
        if (book) {
            book.isRead = false;
        }

    }
}

const lotr = new Book("LOTR", "S.Hopkin", 1955, false);
const sw = new Book("Star Wars", "Author", 1965, true);
const b1984 = new Book("1984", "G. Orwell", 1955, false);


const library = new Library();

library.addBook(lotr)
library.addBook(sw)
library.addBook(b1984)
library.markAsRead("LOTR")
library.markAsUnread("Star Wars")
library.listBook();

