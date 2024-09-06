class Book {


    constructor(title, year, numberCheckedOut) {
        this.title = title;
        this.year = year;
        this.numberCheckedOut = numberCheckedOut;
    }

    get yearBook() {
        return this.ThrownOut();
    }

    get CheckedOut() {
        return this.CheckedOut();
    }

     ThrownOut() {
        if (this.year > 5) {
            return (`El libro, debe desecharse ${this.title}`);
        }
        return this.year;
    }

    CheckedOut() {
        if (this.numberCheckedOut > 100) {
            return (`El libro, tal ${this.title} será desechado `);
        }
        return this.numberCheckedOut;
    }


}
const book = new Book("Bartolity", 4, 200);
console.log(book.ThrownOut());
console.log(book.CheckedOut());
