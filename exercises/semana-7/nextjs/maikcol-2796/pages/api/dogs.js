export default async function handler(req, res) {
    try {
        const response = await fetch("https://dog.ceo/api/breeds/image/random/20")
        const data = await response.json()
        const imagesDogs = data.message
        const dogs = imagesDogs.map((image) => {
            const pattern = /breeds\/(.*?)\//
            const match = image.match(pattern)
            const breed = match[1].split('-').reverse().join(' ')
            return {
                title: breed,
                img: image,
            }
        })
        const uniqueDogsSet = new Set()
        const uniqueDogs = dogs.filter((dog) => {
            if (!uniqueDogsSet.has(dog.title)) {
                uniqueDogsSet.add(dog.title)
                return true
            }
            return false
        }).slice(0, 10)
        res.status(200).json(uniqueDogs)
    } catch (err) {
        console.log(err)
        res.status(500).json({ error: err.message })
    }

    
}