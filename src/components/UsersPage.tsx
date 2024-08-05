import axios from "axios";
import { useEffect, useRef, useState } from "react";
import type { ReqResUserListResponse, User } from "../interfaces";

const loadUsers = async (page: number = 1): Promise<User[]> => {
    try {
        const { data } = await axios<ReqResUserListResponse>('https://reqres.in/api/users', {
            method: 'GET',
            params: {
                page: page
            }
        });
        return data.data;
    } catch (error) {
        console.error(error);
        return [];
    }
}

export const UsersPage = () => {

    const [users, setUsers] = useState<User[]>([]);
    const currentPageRef = useRef<number>(1);

    useEffect(() => {
        loadUsers(currentPageRef.current).then((usuarios) => setUsers(usuarios));
        // Tambien sería
        // loadUsers().then(setUsers);
    }, [])

    const nextPage = async () => {
        currentPageRef.current++;
        const users: User[] = await loadUsers(currentPageRef.current);
        if (users.length > 0) {
            setUsers(users);
        } else {
            currentPageRef.current--;
        }
    }

    const prevPage = async () => {
        if (currentPageRef.current < 1) return;

        currentPageRef.current--;
        const users: User[] = await loadUsers(currentPageRef.current);
        setUsers(users);
    }

    return (
        <>
            <h3>Usuarios:</h3>
            <table>
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Nombre</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <UserRow key={user.id} user={user}></UserRow>
                    ))}
                </tbody>
            </table>
            <div>
                <button onClick={prevPage}>Prev</button>
                &nbsp;
                <button onClick={nextPage}>Next</button>
            </div>
        </>
    )
}

interface Props {
    user: User;
}

export const UserRow = ({ user }: Props) => {
    const { avatar, email, first_name, last_name } = user;
    return (
        <>
            <tr>
                <td><img style={{ width: '80px', borderRadius: '500px' }} src={avatar} alt="" /></td>
                <td>{first_name} {last_name}</td>
                <td>{email}</td>
            </tr>
        </>
    )
}