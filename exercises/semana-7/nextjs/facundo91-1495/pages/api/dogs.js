const getImages = async (bread) => {
    const url = `https://dog.ceo/api/breed/${bread}/images/random`
    const {message} = await fetch(url)
        .then((response) => response.json())
    return {[bread]: message}
}

const getImagesList = async (list) => {
    const promiseList = list.map(async (bread) => await getImages(bread))
    const result = await Promise.all(
        promiseList
    )
    return result
}

const filterBreads = (data, limit) => {
    const result = Object.keys(data)
        .filter((key) => {
            if (data[key].length === 0) {
                return key
            }
        })
        .sort(() => Math.random() - 0.5)
        .slice(0, limit)

    return result
}

const getBreads = async() => {
    const url = 'https://dog.ceo/api/breeds/list/all'
    const {message} = await fetch(url)
        .then((response) => response.json())
    return message
}

const handler = async (req, res) => {
    try {
        const data = await getBreads()
        const list = filterBreads(data, 12)
        const listWithImages = await getImagesList(list)

        res.status(200).json(listWithImages)
    } catch (err) {
        res.status(500).send({ error: 'failed to fetch data' });

    }
}

export default handler