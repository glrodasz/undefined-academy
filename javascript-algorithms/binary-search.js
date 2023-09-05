function binarySearch(books, valueToFind, key) {
  let start = 0;
  let end = books.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (books[mid][key] === valueToFind) {
      return books[mid];
    } else if (books[mid][key] < valueToFind) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return null;
}

export default binarySearch;
