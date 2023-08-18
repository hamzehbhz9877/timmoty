import React from 'react';
import Image from "next/image"
import {Typography} from '@mui/material';
import {getSinglePost} from "@/server/api/posts";
import {Box} from "@mui/system";
import { useRouter } from 'next/router'
import {useQuery} from "@tanstack/react-query";

const Post = () => {

    const router=useRouter()
    const {id}=router.query

    const { data } = useQuery({
        queryKey: ['singlePost',id],
        queryFn: () => getSinglePost(String(id)),
        staleTime:1000 * 11
    });


    return (
        <Box width={"600px"} maxWidth={"100%"} margin={"auto"}>
            <Image src={data.image} alt={"post"}
                   width={0} height={0} layout="responsive" objectFit="contain"
            />
            <Typography
                        variant="h5">{data.title}</Typography>
            <Typography paragraph>{data.content.substring(0,500)}...</Typography>
            <Typography  variant="h6">category: {data.category}</Typography>
            <Typography  variant="h6">publishedAt: {data.publishedAt}</Typography>
            <Typography  variant="h6">updatedAt: {data.updatedAt}</Typography>
            <Typography  variant="h6">slug: {data.slug}</Typography>
        </Box>

    );
};

export default Post;