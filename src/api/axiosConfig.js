import axios from "axios";



export const fetchApi = axios.create({
    headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${token}`,
    },
    // timeout: 1,
    baseURL: "https://fakestoreapi.com/",
})




// const test = new Promise((resolve, reject) => {
//     // some codes
//     if(condition){
//         resolve(data)
//     } else {
//         reject(error)
//     }
// })

// test().then(response => console.log(response)).catch((err) => console.log(err))
