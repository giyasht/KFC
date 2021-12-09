import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { isAuthenticated } from "../auth/index"
import { addProduct } from "../product/index.js";
import AdminSideBar from '../components/AdminSideBar/AdminSideBar';

const AddProductDatabase = () => {

    const [values, setValues] = useState({
        name: "kfc burger",
        description: "famous burger in india",
        price: "199",
        category: "burger",
        stock: "100",
        // photo: "",
        error: "",
        success: false
    });

    const {name, description, price, category, stock, error, success} = values;

    const { user, token } = isAuthenticated();

    const handleChange = name => event => {  
        setValues({ ...values, error: false, [name]: event.target.value });
    };

    const onSubmit = async (event) => {

        try {

            event.preventDefault();

            setValues({ ...values, error: false });

            const data = await addProduct( user._id, token, { name, description, price, category, stock });

            if (data.error) {
                setValues({ ...values, error: data.error, success:false })
            }else{
                setValues({ ...values, name:'', description:'', price:'', category:'', stock:'', error:'', success:true });
            }

                
        } catch (error) {
            console.log("Error in creating category...");
        }
    };

    
    const successMessage = () => {
        return (
            <div className="row">
                <div className="col-md-6 offset-sm-3 text-left">
                    <div
                    className="alert alert-success"
                    style={{ display: success ? "" : "none" }}
                    >
                    New Product created successfully. Please
                    <Link to="/signin">Login Here</Link>
                    </div>
                </div>
            </div>
        );
    };

    const errorMessage = () => {
        return (
            <div className="row">
                <div className="col-md-6 offset-sm-3 text-left">
                    <div
                    className="alert alert-danger"
                    style={{ display: error ? "" : "none" }}
                    >
                    {error}
                    </div>
                </div>
            </div>
        );
    };

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
                            <input type="file" className="form-control-file" id="exampleFormControlFile1" />
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
                {successMessage()}
                {errorMessage()}
                {AddProductDatabaseForm()}
                <p className="text-center">{JSON.stringify(values)}</p>
            </div>
        </>
    )
}

export default AddProductDatabase
