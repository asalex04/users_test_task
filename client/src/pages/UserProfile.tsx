import React, {useEffect, useState} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {useNavigate, useParams} from "react-router-dom";
import {fetchOneUser, updateUser} from "../api/userApi";

const UserProfile = () => {
    const {id} = useParams()
    let navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [file, setFile] = useState('')
    const [name, setName] = useState('')
    const [lastname, setLastname] = useState('')
    const [gender, setGender] = useState('')

    const handleClose = () => {
        navigate('/profiles')
    };

    useEffect(() => {
        fetchOneUser(id)
            .then(data => {
                setEmail(data.email)
                setFile(data.photo)
                setName(data.name)
                setLastname(data.lastName)
                setGender(data.gender)
            })
    }, [])
    // @ts-ignore
    const selectFile = e => {
        setFile(e.target.files[0])
    }

    const addUser = () => {
        const formData = new FormData()
        formData.append('email', email)
        formData.append('name', name)
        formData.append('lastName', lastname)
        formData.append('photo', file)
        formData.append('gender', gender)
        updateUser(id, formData).then(() => handleClose())
    }

    return (
        <Container>
            <Row className='mt-3'>
                <Col md={4}>
                    <img width={300} height={300} src={`${process.env.REACT_APP_API_URL}${file}`}/>
                </Col>
                <Col>
                    <Form style={{margin: 20, width: '80%'}}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter name"
                                value={name}
                                onChange={e => setName(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Lastname</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter lastname"
                                value={lastname}
                                onChange={e => setLastname(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Label>Photo</Form.Label>
                        <Form.Control
                            className={'mt-0'}
                            type='file'
                            onChange={selectFile}
                        />
                        <Form.Label className="mt-3">Gender</Form.Label>
                        <Form.Select
                            value={gender}
                            onChange={e => setGender(e.target.value)}
                        >
                            <option>gender</option>
                            <option value="1">male</option>
                            <option value="2">female</option>
                        </Form.Select>
                        <Button className="mt-3" variant="primary" onClick={addUser}>
                            Update user
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default UserProfile;
