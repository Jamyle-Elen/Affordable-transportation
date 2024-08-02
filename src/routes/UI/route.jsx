import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../../components/pages/homepage/homepage.jsx'
import SignIn from '../../components/pages/passenger/Sign_in/sign-in.jsx'
import SignUp from '../../components/pages/passenger/Sign_up/sign-up.jsx'

const Router = () => {
    return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/sign-in' element={<SignIn/>}/>
        <Route path='/sign-up' element={<SignUp/>}/>
        <Route path='*' element={<h1>Not Found</h1>}/>
      </Routes>
    </BrowserRouter>
    </>
    )
}

export default Router;