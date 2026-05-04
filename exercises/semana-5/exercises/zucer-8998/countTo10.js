const ONE_SECOND_IN_MILLISECONDS = 1_000;

// Lo hago de esta forma solo para mostrar otra forma de solucionar el problema

const main = () => {
    Array(10).fill('').forEach((_, index) => {
        setTimeout(
            () => console.log(index + 1), ONE_SECOND_IN_MILLISECONDS * (index + 1)
        )
    }) 
}

main()