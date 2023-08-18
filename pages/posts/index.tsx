import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query'
import {getAllPosts} from "@/server/api/posts";
import AllPosts from "@/components/posts"

export async function getStaticProps() {
    const queryClient = new QueryClient()

    await queryClient.prefetchQuery(['posts'], getAllPosts)

    return {
        props: {
            dehydratedState: dehydrate(queryClient),
        },
        revalidate:10
    }
}

function Posts() {

    return(<AllPosts/>)
}
export default Posts