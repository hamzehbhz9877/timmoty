import axios from "axios";

//We can convert these functions into a hook with the help of react query,
//but here the goal is to perform the task.

export const getAllPosts =async () => {
    try {
        const res =await axios(`${process.env.NEXT_PUBLIC_SERVER}/posts`)
        return res.data
    }catch (e){
        throw new Error('Failed to fetch post')
    }
}
export const getSinglePost =async (id:string) => {
    try {
        const res =await axios(`${process.env.NEXT_PUBLIC_SERVER}/posts/${id}`)
        return res.data
    }catch (e){
        throw new Error('Failed to fetch post')
    }
}