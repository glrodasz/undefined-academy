import { useEffect, useState } from "react"

const useGetPost = () => {
    const [postList, setPostList] = useState({loading: true, data: []})

    const getData = async (url) => {
        try {
            const response =  await fetch(url)
            const json = await response.json()
            const data = json.map((post) => (
                {...post,
                    published: new Date(post.published)
                }))
            setPostList({
                loading: false,
                data
            })
        } catch (error) {
            // eslint-disable-next-line no-console
            console.error(error)
            setPostList((prev) => setPostList({...prev, loading: false}))
        }
    }

    useEffect(() => {
        getData('/data/posts.json')
    }, [])

    return postList
}

export default useGetPost