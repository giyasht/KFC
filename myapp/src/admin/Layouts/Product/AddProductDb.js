import React, { useState, useEffect } from 'react'
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";
import { isAuthenticated } from "./../../../auth/index"
import { addProduct } from "./../../Helper/Product/index";
import AdminSideBar from './../../../components/AdminSideBar/AdminSideBar';


const AddProductDb = () => {

    let photo;

    const navigate = useNavigate();

    const [values, setValues] = useState({
        name: "kfc burger",
        description: "famous burger in india",
        price: "199",
        // category: "619cb6bddafcf9142ec6f52a",
        category: "burger",
        stock: "100",
        // photo: '',
        error: "",
        success: false
    });
    // photo,
    const {name, description, price, category, stock,  error, success} = values;

    const { user, token } = isAuthenticated();

    const handleChange = name => event => {  
        setValues({ ...values, error: false, [name]: event.target.value });
    };

    const handleNewImage = name => event => {
        console.log(event.target.files[0]);
        setValues({ ...values, error: false, [name]: event.target.files[0] });
    }

    const onSubmit = async (event) => {

        try {

            event.preventDefault();

            setValues({ ...values, error: false });

            // console.log("On submit values --> ");
            // console.log(values);

            // const response = await addProduct( user._id, token, { name, description, price, category, stock, photo });
            const response = await addProduct( user._id, token, { ...values });

            console.log(response);

            if (response.data.error) {
                setValues({ ...values, error: response.data.error, success:false })
            }else{
                setValues({ ...values, name:'', description:'', price:'', category:'', stock:'', photo:'', error:'', success:true });
                navigate('/admin/dashboard');
            }

                
        } catch (error) {
            console.log("Error in adding product to database ...");
        }
    };

    useEffect(() => {
        if (error){
            Swal.fire({
                title: 'Admin !',
                icon: 'error',
                text: error,
            })
        }
        if (success){
            Swal.fire({
                title: 'Admin !',
                icon: 'success',
                text: 'New Product created successfully...',
            })
        }
    }, [error, success])

    const AddProductDatabaseForm = () => {
        return (
            <div className="row">
                <div className="col-md-6 offset-sm-3 text-left">
                    <h1>Create Product</h1>
                    <form>
                        <div className="form-group">
                            <label className="form-control-label">Name of Product</label>
                            <input className="form-control" type="text" onChange={handleChange('name')} value={name} />
                        </div>
                        <div className="form-group">
                            <label className="form-control-label">Description</label>
                            <input className="form-control" type="text" onChange={handleChange('description')} value={description} />
                        </div>
                        <div className="form-group">
                            <label className="form-control-label">Price</label>
                            <input className="form-control" type="text" onChange={handleChange('price')} value={price} />
                        </div>
                        <div className="form-group">
                            <label className="form-control-label">Category</label>
                            <input className="form-control" type="text" onChange={handleChange('category')} value={category} />
                        </div>
                        <div className="form-group">
                            <label className="form-control-label">Stock</label>
                            <input className="form-control" type="text" onChange={handleChange('stock')} value={stock} />
                        </div>
                        <div className="form-group">
                            <label className="form-control-label">Select Product Image</label>
                            {/* == null ? '' : photo */}
                            <input type="file" className="form-control-file" id="myfile" onChange={handleNewImage('photo')} value={photo} />
                        </div>
                        <button onClick={onSubmit} className="btn btn-primary" >Submit</button>
                    </form>
                </div>
            </div>
        )
    }

    return (
        <>
            <div style={{overflow:"hidden"}}>
                <AdminSideBar/>
                {AddProductDatabaseForm()}
                <p className="text-center">{JSON.stringify(values)}</p>
            </div>
        </>
    )
}

export default AddProductDb;