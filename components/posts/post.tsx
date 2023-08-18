import React from 'react';
import Link from "next/link"
import Image from "next/image"
import {Typography,Card} from '@mui/material';

import {useStyles} from "@/components/postStyle";

const Post = ({title, content, id, image}: POST) => {

    const {card,title:titleStyle}=useStyles

    return (
        <Link href={`/post/${id}`}>
            <Card sx={card}>
                <Image src={image}  alt={"post"}
                       width={0} height={0} layout="responsive" objectFit="contain"
                />
                <Typography sx={titleStyle}
                            variant="h5">{title.substring(0,30)}...</Typography>
                <Typography paragraph  >{content.substring(0,150)}...</Typography>
            </Card>
        </Link>
    );
};

export default Post;