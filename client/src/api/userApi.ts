import {$host, $authHost} from "./index";

// export const createPost = async (post: FormData) => {
//     const {data} = await $authHost.post('api/post', post)
//     return data
// }
//
// export const fetchAllPosts = async () => {
//     const {data} = await $host.get('api/post')
//     return data
// }

export const fetchOneUser = async (id: string | undefined) => {
    const {data} = await $host.get(`/api/profiles/${id}`)
    return data
}
//
// export const deletePost = async (id: string) => {
//     const {data} = await $authHost.delete(`api/post/${id}`)
//     return data
// }

export const updateUser = async (id: string | undefined, user: FormData) => {
    const {data} = await $host.put(`/api/profiles/${id}`, user)
    return data
}

