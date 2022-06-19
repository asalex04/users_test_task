import React from 'react';
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {LOGIN_ROUTE, USERS_ROUTE} from "../utils/consts";
import {useNavigate, NavLink} from 'react-router-dom'
import {setIsAuth} from "../store/reducers/authSlice";
import {useAppDispatch, useAppSelector} from "../hooks/redux";

const NavBar = () => {
    const {isAuth} = useAppSelector(state => state.auth)
    const dispatch = useAppDispatch()
    let navigate = useNavigate()

    const logout = () => {
        dispatch(setIsAuth(false))
        localStorage.removeItem('token')
    }

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                {isAuth ?
                    <>
                        <NavLink style={{color: 'white'}} to={USERS_ROUTE}>Пользователи</NavLink>
                        <Nav className="ms-auto" style={{color: 'white'}}>
                            <Button
                                onClick={() => logout()}
                                variant={'outline-light'}
                                className="ms-2"
                            >
                                Выйти
                            </Button>
                        </Nav>
                    </>
                    :
                    <Nav className="ml-auto" style={{color: 'white'}}>
                        <Button
                            variant={'outline-light'}
                            onClick={() => navigate(LOGIN_ROUTE)}
                        >
                            Авторизация
                        </Button>
                    </Nav>
                }
            </Container>
        </Navbar>
    );
};

export default NavBar;
