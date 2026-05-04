const SEC_IN_MS = 1000;

async function imprintNumbers(n = 10) {
    console.log('Numbers * Second');
    for (let i = 1; i <= n; i++) {
        console.log(i);
        await new Promise(resolve => setTimeout(resolve, SEC_IN_MS));
    }
}

imprintNumbers(20);