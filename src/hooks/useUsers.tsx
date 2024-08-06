import { useRef, useState, useEffect } from 'react';
import axios from 'axios';
import type { ReqResUserListResponse, User } from '../interfaces';



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

const useUsers = () => {
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

    return {
        //Properties
        users,

        //Methods
        nextPage,
        prevPage,
    }

}

export default useUsers
