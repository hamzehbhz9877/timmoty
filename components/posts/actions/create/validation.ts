import {object, string} from "yup";

const initialValues={
    slug:"",
    url:"",
    title:"",
    category:"",
    status:"",
    content:"",
    image:"",
}

const validationSchema = object({
    slug: string().required("slug is required").trim(),
    url: string().required("url is required").trim(),
    title: string().required("title is required").trim(),
    category: string().required("category is required").trim(),
    status: string().required("status is required").trim(),
    content: string().required("content is required").trim(),
    image: string().required("image is required").trim(),
});

export {initialValues,validationSchema}