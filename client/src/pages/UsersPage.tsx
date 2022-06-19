import React, {FC, useEffect, useState} from 'react';
import {Table} from "react-bootstrap";
import {IUser} from "../types";
import {useNavigate} from "react-router-dom";
import {$host} from "../api";
import {USERS_ROUTE} from "../utils/consts";

export const getUsers = async (): Promise<{ count: number, rows: IUser[] }> => {
    let result = []
    try {
        const res = await $host.get(`/api/profiles`)
        result = res.data
    } catch (e: any) {
        console.log(e.res.data.message)
    }
    return result
}

const formatDate = (newDate: string) => {
    const time = newDate.split('T')[1].slice(0, 5)
    const date = newDate.split('T')[0]
    return `${date} / ${time}`
}

const UsersPage: FC = () => {
    let navigate = useNavigate()
    const [users, setUsers] = useState<IUser[]>([])

    useEffect(() => {
        getUsers().then(
            res => setUsers(res.rows)
        )
    }, [])

    return (
        <div>
            <Table className="table table-bordered">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>email</th>
                    <th>name</th>
                    <th>lastname</th>
                    <th>photo</th>
                    <th>gender</th>
                    <th>data</th>
                </tr>
                </thead>
                <tbody>
                {users && users.map(user => (
                    <tr key={user.id} onClick={() => navigate(`${USERS_ROUTE}/${user.id}`)}>
                        <td>{user.id}</td>
                        <td>{user.email}</td>
                        <td>{user.name}</td>
                        <td>{user.lastName}</td>
                        <td>{user.photo}</td>
                        <td>{user.gender}</td>
                        <td>{formatDate(user.myDate)}</td>
                    </tr>
                ))}
                </tbody>
            </Table>
        </div>
    );
};

export default UsersPage;
