const API = 'http://127.0.0.1:8000/api'

export const addCategory = async (userId, token, category) => {
    try {

        // console.log(category);
        // ${API}
        const response = await fetch(`${API}/category/create/${userId}`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(category)
        })

        if (response) {
            return response.json()
        }
        
    } catch (error) {
        return console.log(error);
    }
}

export const updateCategory = async (userId, token, categoryId, updatedCategory) => {
    
    try {

        // ${API} category/61a2482c79731e6be332bbb9/6195f66e996a1cb655a4d4fc
        // const response = await fetch(`${API}/category/${categoryId}/${userId}`, {
        //     method: "PUT",
        //     headers: {
        //         Accept: "application/json",
        //         "Content-Type": "application/json",
        //         Authorization: `Bearer ${token}`
        //     },
        //     body: JSON.stringify(name)
            
        // })

        // console.log("updateCategory index --- > " + category);

        // let data = JSON.stringify({name:updatedCategoryName.uname});
        // let data = JSON.stringify({name:updatedCategoryName});
        let data = JSON.stringify({name:updatedCategory.updatedName});

        const response = await fetch(`${API}/category/${categoryId}/${userId}`, {
            method: "PUT",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            body: data
            
        })

        if (response) {
            return response.json()
        }
        
    } catch (error) {
        return console.log(error);
    }
}

export const deleteCategory = async (userId, token, categoryId) => {

    try {

        const response = await fetch(`${API}/category/${categoryId}/${userId}`, {
            method: "DELETE",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },            
        })

        if (response) {
            return response.json()
        }
        
    } catch (error) {
        return console.log(error);
    }

}

export const getAllCategories = async () => {
    try {

        const response = await fetch(`${API}/categories`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        })

        if (response) {
            return response.json()
        }

    } catch (error) {
        return console.log(error);
    }
}

export const getCategoryByName = async (name) => {
    try {

        const response = await fetch(`${API}/category/name/${name}`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        })

        if (response) {
            return response.json()
        }

    } catch (error) {
        return console.log(error);
    }
}
