import React, {useState} from "react";
import {Button,Box, FormHelperText,Stack} from "@mui/material";
import Image from "next/image";

//styles
import {styles} from "./styles";

type Props = {
    title: string
    validation:any,
    name:string
}

export default function UploadButtons({title,validation,name}: Props) {

    const {helperText,onChange,...rest}=validation

    const [imageUrl, setImageUrl] = useState('');

    const {image,imageWrapper} = styles

    const handleFileUpload = (event: any) => {
        const file = event.target.files && event.target.files[0];
        const reader = new FileReader();
        if (reader) {
            reader.readAsDataURL(file);
            reader.onload = () => {
                const result = reader?.result as string;
                setImageUrl(result);
                onChange(file)
            }
        }
    };

    return (
        <Stack direction="column" alignItems="center" sx={{mt: 2}}>
            <label htmlFor="upload-image">
                <Button variant="contained" component="span">
                    {title}
                </Button>
                <input
                    id="upload-image"
                    hidden
                    accept="image/*"
                    type="file"
                    onChange={handleFileUpload}
                    name={name}
                    {...rest}
                />
            </label>
            {
                imageUrl &&
                <Box sx={imageWrapper}>
                     <Image  width={0} height={0}
                                    style={Object(image)}
                             src={imageUrl} alt="Uploaded Image"/>
                </Box>
            }
            <FormHelperText error>{helperText}</FormHelperText>
        </Stack>
    );
}
