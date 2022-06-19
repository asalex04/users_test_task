import React, {useEffect, useState} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Spinner} from "react-bootstrap";
import NavBar from "./components/NavBar";
import UsersPage from "./pages/UsersPage";
import UserProfile from "./pages/UserProfile";
import {LOGIN_ROUTE, REGISTRATION_ROUTE, USER_ROUTE, USERS_ROUTE} from "./utils/consts";
import Auth from "./pages/Auth";



function App() {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1000)

    }, [])

    if (loading) {
        return <Spinner animation={'grow'}/>
    }
    return (
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path= {USERS_ROUTE} element={<UsersPage/>} />
                <Route path={USER_ROUTE} element={<UserProfile/>} />
                <Route path={REGISTRATION_ROUTE} element={<Auth/>} />
                <Route path={LOGIN_ROUTE} element={<Auth/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
