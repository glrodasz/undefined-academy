const ONE_SECOND_MS = 1000;
let count = 1;
const interval = setInterval(() => {
    console.log(count);
    count++;

    if (count > 10) {
        clearInterval(interval);
    }
}, ONE_SECOND_MS);