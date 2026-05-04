import binarySearch from "./binary-search.js";
import books from "./books.js";

import bubbleSort from "./bubble-sort.js";

const [, , titleToSearch] = process.argv;

const sortedBooks = bubbleSort(books, (a, b) => a.title > b.title);

// console.log(sortedBooks.map((book) => book.title));

const foundBook = binarySearch(sortedBooks, titleToSearch, "title");

if (foundBook) {
  console.log(foundBook);
} else {
  console.log("Book not found");
}
