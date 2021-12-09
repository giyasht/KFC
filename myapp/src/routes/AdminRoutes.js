import React from 'react'
import { Route } from "react-router-dom";
import ProtectedRoute from './ProtectedRoute';
import AdminDashboard from '../layouts/AdminDashboard/AdminDashboard';
import AddCategoryDb from '../admin/Layouts/Category/AddCategoryDb';
import UpdateCategoryDb from '../admin/Layouts/Category/UpdateCategoryDb';

import AddProductDb from '../admin/Layouts/Product/AddProductDb'; 

const AdminRoutes = [

    // Admin DashBoard
    <Route exact path='/admin/dashboard' element={ <ProtectedRoute><AdminDashboard /></ProtectedRoute> } key="admin-dashboard" />,

    // Admin - Category
    <Route exact path='/admin/create/category' element={ <ProtectedRoute><AddCategoryDb /></ProtectedRoute> } key="admin-create-category" />,
    <Route exact path='/admin/update/category' element={ <ProtectedRoute><UpdateCategoryDb /></ProtectedRoute> } key="admin-update-category" />,

    // Admin - Product
    <Route exact path='/admin/create/product' element={ <ProtectedRoute> <AddProductDb /></ProtectedRoute> } key="admin-create-product" />
];

export default AdminRoutes;