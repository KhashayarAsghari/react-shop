import axios from "axios";



export const fetchApi = axios.create({
    headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${token}`,
    },
    // timeout: 1,
    baseURL: "https://fakestoreapi.com/",
})



fetchApi.interceptors.response.use(res => {
    if (res.status === 401) {
        location.href = "/login"
    }

    // return { data: { ...res.data }, statusCode: res.status }
    return res.data
})
