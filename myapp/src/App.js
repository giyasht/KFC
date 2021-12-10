import React from 'react'
import './App.css'
import { BrowserRouter, Routes , Route } from "react-router-dom";
import Home from './layouts/HomePage/Home';
import Signin from './layouts/SignInPage/Signin'
import SignUp from './layouts/SignUpPage/SignUp';

import Form from './components/Form/Form'
import Home2 from './components/Home2';

import AdminRoutes from './routes/AdminRoutes'
import Developers from './layouts/Developers/Developers';


import Menu from "./layouts/MenuPage/Menu";
import Error404 from './components/Error404/Error404';
import Loading from './components/Loading/Loading';

const App = () => {
    
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route exact path='/home2' element={<Home2 />} />
                    <Route exact path='/signup' element={<SignUp />} />
                    <Route exact path='/signin' element={<Signin />} />
                    <Route exact path='/developers' element={<Developers />} />

                    {AdminRoutes}


                    {/* <Route exact path="/menu" element={<Menu />} /> */}
                    <Route exact path="/menu/:category" element={<Menu />} />
                    
                    {/* test Urls */}
                    <Route exact path='/form' element={<Form />} />
                    <Route exact path='/loader' element={<Loading />} />
                    <Route exact path='*' element={<Error404 />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App;

