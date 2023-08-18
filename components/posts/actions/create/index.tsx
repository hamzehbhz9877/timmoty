import React from 'react';
import {Box, Button, Grid, TextField, Typography} from "@mui/material";
import SelectBox from "@/components/input/select";
import {useFormik} from "formik"
import {initialValues, validationSchema} from "./validation"
import ImageUpload from "@/components/input/imageUpload"

const Create = () => {

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <Box maxWidth={"100%"} width={"600px"} margin={'auto'} boxShadow={'0 0 10px -5px'} borderRadius={"12px"}
             padding={'15px'}
        >
            <>
                <Typography textAlign={"center"} variant={"h4"} marginBottom={"15px"}>create post</Typography>
                <form onSubmit={formik.handleSubmit}>
                    <Grid container spacing={2} sx={{marginBottom: 4}}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                type="text"
                                variant='outlined'
                                color='secondary'
                                label="slug"
                                name="slug"
                                fullWidth
                                value={formik.values.slug}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.slug && Boolean(formik.errors.slug)}
                                helperText={formik.touched.slug && formik.errors.slug}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                type="text"
                                variant='outlined'
                                color='secondary'
                                label="url"
                                name="url"
                                fullWidth
                                value={formik.values.url}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.url && Boolean(formik.errors.url)}
                                helperText={formik.touched.url && formik.errors.url}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                type="text"
                                variant='outlined'
                                color='secondary'
                                label="title"
                                name="title"
                                fullWidth
                                value={formik.values.title}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.title && Boolean(formik.errors.title)}
                                helperText={formik.touched.title && formik.errors.title}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <SelectBox
                                validation={
                                    {
                                        value: formik.values.category,
                                        onChange: formik.handleChange,
                                        onBlur: formik.handleBlur,
                                        error: formik.touched.category && Boolean(formik.errors.category),
                                        helperText: formik.touched.category && formik.errors.category,
                                    }
                                }
                                title={"category"} data={['item1', 'item2', 'item3']}/>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <SelectBox
                                validation={
                                    {
                                        value: formik.values.status,
                                        onChange: formik.handleChange,
                                        onBlur: formik.handleBlur,
                                        error: formik.touched.status && Boolean(formik.errors.status),
                                        helperText: formik.touched.status && formik.errors.status,
                                    }
                                }
                                title={"status"} data={['item1', 'item2', 'item3']}/>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                type="text"
                                variant='outlined'
                                color='secondary'
                                label="content"
                                name="content"
                                fullWidth
                                multiline
                                minRows={3}
                                maxRows={10}
                                value={formik.values.content}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.content && Boolean(formik.errors.content)}
                                helperText={formik.touched.content && formik.errors.content}
                            />
                        </Grid>
                        <Grid item xs={12} textAlign={'center'}>
                            <ImageUpload
                                name="image"
                                validation={
                                    {
                                        onChange: (data:string)=>formik.setFieldValue('image',data),
                                        helperText: formik.touched.image && formik.errors.image,
                                    }
                                }
                                title={"upload image"}/>
                        </Grid>
                    </Grid>
                    <Button variant="outlined" color="secondary" type="submit">Register</Button>
                </form>
            </>
        </Box>
    );
};

export default Create;
