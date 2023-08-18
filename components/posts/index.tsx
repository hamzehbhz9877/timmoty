import React from 'react';
import Post from "@/components/post";
import Grid from "@mui/material/Grid";
import {List,Button} from '@mui/material';
import {useQuery} from "@tanstack/react-query";
import {getAllPosts} from "@/server/api/posts";
import {useRouter} from "next/navigation";

const Posts = () => {

    const router=useRouter()
    const { data } = useQuery({ queryKey: ['posts'], queryFn: getAllPosts })

    const createPost=()=>router.push('post/create')

    return (
        <>
            <Button onClick={createPost} variant="contained" sx={{mb:1}}>create post</Button>

            <List>
                <Grid container spacing={{xs: 2, md: 3}}>
                    {data?.map((data:any) =>
                        <Grid item xs={12} sm={6} md={3} xl={2} key={data.id}>
                            <Post {...data} />
                        </Grid>
                    )}
                </Grid>
            </List>
        </>

    );
};

export default Posts;