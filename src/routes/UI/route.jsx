import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../../pages/homepage/homepage.jsx'
// Passageiro
import SignIn from '../../pages/passenger/Sign_in/sign-in.jsx'
import SignUp from '../../pages/passenger/Sign_up/sign-up.jsx'
// Parceiro
import SignInDriver from '../../pages/driver/Sign_in/sign-in-driver.jsx'
import SignUpDriver from '../../pages/driver/Sign_up/sign-up-driver.jsx'
import ProfilePassenger from '../../pages/Profile/profile.jsx'
import RaceRequest from '../../pages/RaceRequest/raceRequest.jsx';

const Router = () => {
    return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/sign-in' element={<SignIn/>}/>
        <Route path='/sign-up' element={<SignUp/>}/>
        {/* Parceiro */}
        <Route path='/sign-in/driver' element={<SignInDriver/>}/>
        <Route path='/sign-up/driver' element={<SignUpDriver/>}/>
        <Route path='/profile-passenger' element={<ProfilePassenger/>}/>
        <Route path='/race-request' element={<RaceRequest/>}/>
        <Route path='*' element={<h1>Not Found</h1>}/>
      </Routes>
    </BrowserRouter>
    </>
    )
}

export default Router;