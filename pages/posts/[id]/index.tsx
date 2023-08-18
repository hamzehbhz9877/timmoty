import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query'
import SinglePost from "@/components/posts/details"
import {getSinglePost} from "@/server/api/posts";
import axios from "axios";
import {useRouter} from "next/router";
import {GetStaticProps} from "next";

interface GetStaticPropsExtended extends GetStaticProps {
    params:{
        id: string,
    }
}

export async function getStaticProps({params}:GetStaticPropsExtended) {

    const queryClient = new QueryClient()

    await queryClient.prefetchQuery(['singlePost',params.id],()=> getSinglePost(params.id))

    return {
        props: {
            dehydratedState: dehydrate(queryClient),
        },
        revalidate:10
    }
}
export async function getStaticPaths() {
    const posts = await axios(`${process.env.NEXT_PUBLIC_SERVER}/posts`)
    const paths=posts.data.map((post:any) => ({
        params:{
            id: String(post.id),
        }
    }))
    return {
        paths,
        fallback: true, // false or "blocking"
    }
}


function PostDetails() {
    const router = useRouter()

    if (router.isFallback) {
        return <div>Loading...</div>
    }
    return(<SinglePost/>)
}
export default PostDetails