import axios from 'axios';

const API = 'http://127.0.0.1:8000/api'

// export const addProduct = async (userId, token, product) => {
//     try {

//         console.log(product);
//         // ${API}
//         const response = await fetch(`${API}/product/create/${userId}`, {
//             method: "POST",
//             headers: {
//                 Accept: "application/json",
//                 Authorization: `Bearer ${token}`
//             },
//             body: JSON.stringify(product)
//         })

//         if (response) {
//             return response.json()
//         }
        
//     } catch (error) {
//         return console.log(error);
//     }
// }


export const addProduct = async (userId, token, product) => {
    try {

        console.log(product);

        let formData = new FormData();

        formData.append('name', product.name)
        formData.append('description', product.description)
        formData.append('price', product.price)
        formData.append('category', product.category)
        formData.append('stock', product.stock)
        formData.append('photo', product.photo)


        // console.log(product.photo);
        // console.log(formData);
        // ${API}
        const response = await axios.post(`${API}/product/create/${userId}`, formData ,{
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${token}`,
            },
        })

        if (response) {
            console.log(response);
            return response
            // return console.log(response);
        }
        
    } catch (error) {
        console.log(error.response);
        return error.response;
    }
}