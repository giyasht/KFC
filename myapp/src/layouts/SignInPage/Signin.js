import React, { useState, useEffect } from "react";
import { Navigate, NavLink } from 'react-router-dom';
import { signin, authenticate, isAuthenticated } from "../../auth/index.js"
import './Signin.css' 
import back from "../../../src/images/background1.jpg";
import Swal from 'sweetalert2'


const Signin = () => {

    const [values, setValues] = useState({
        email: "p@gmail.com",
        password: "Pawan@0843",
        error: "",
        // loading: false,
        didRedirect: false
    });

    // loading,
    const { email, password, error,  didRedirect } = values;

    const { user } = isAuthenticated();

    const handleChange = name => event => {  
        setValues({ ...values, error: false, [name]: event.target.value });
    };

    const onSubmit = async (event) => {

        try {

            event.preventDefault();

            setValues({ ...values, error: false });

            const data = await signin({ email, password });

            if (data.error) {
                // , loading: false 
                setValues({ ...values, error: data.error})
            }else{
                // JWT sets in local storage
                authenticate(data, () => {
                    setValues({ ...values, email:'', password:'', didRedirect: true });
                })
            }
                
        } catch (error) {
            console.log("Signin Failed");
        }
    }

    const performRedirect  = () => {
        if (didRedirect) {
            
            if (user && user.role === 1 ) {
                // console.log("redirected to admin dasboard")
                return (
                    <Navigate to="/" />
                )
            }else{
                // console.log("redirect to user dasboard")
                return (
                    <Navigate to="/" />
                )
            }
        }

        if (isAuthenticated()) {
            return <Navigate to="/" />
        }
    }

    useEffect(() => {
        if (error){
            Swal.fire({
                title: 'Admin!',
                icon: 'error',
                text: error,
            })
        }
        if (user && user.role === 1){
            Swal.fire({
                title: 'Admin!',
                icon: 'success',
                text: 'Welcome Back Admin Sign in successfull',
            })
        }
        if (user && user.role === 0){
            Swal.fire({
                title: 'User!',
                icon: 'success',
                text: 'Welcome Back Sign in successfull',
            })
        }
    }, [error, didRedirect, user])

    const signInForm = () => {
        return(


            <div className="Outerlogin " style={{ backgroundImage: "url(" + back + ")" }}>
                <div className="login-page">
                    <div className="form">
                    <div className="login">
                        <div className="login-header">
                        <h3 style={{ fontWeight: "bold" }}>LOGIN</h3>
                        <p>Please enter your credentials to login.</p>
                        </div>
                    </div>
                    <form className="login-form">
                        <input type="email" value={email} onChange={handleChange("email")} placeholder="Username" />
                        <input type="password" value={password} onChange={handleChange("password")} placeholder="Password" />
                        <button onClick={onSubmit} >Login</button>
                        <p className="message">
                            Not registered? <NavLink to="/signup">Create an account</NavLink>
                        </p>
                        <p className="backhome" style={{color:"black"}}>
                            <NavLink to='/'>Back to home</NavLink>
                        </p>
                    </form>
                    </div>
                </div>
            </div>

            
        )
    };

    return(
        <>
            {/* <Navbar /> */}
            {/* {loadingMessage()}
            {errorMessage()} */}
            {signInForm()}
            {performRedirect()}
            {/* <p className="text-center">{JSON.stringify(values)}</p> */}

            {/* <Footer/> */}
        </>
    )
}

export default Signin;