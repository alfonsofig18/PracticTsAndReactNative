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
        console.log(data);

        return data.data;
    } catch (error) {
        console.error(error);
        return [];
    }
}

const useUsers = () => {
    const [users, setUsers] = useState<User[]>([]);
    const currentPageRef = useRef<number>(1);
    const btnNext = useRef<HTMLButtonElement>(null);
    const btnPrev = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        loadUsers(currentPageRef.current).then((usuarios) => setUsers(usuarios));
        // Tambien sería
        // loadUsers().then(setUsers);
        if (btnPrev.current) {
            btnPrev.current.disabled = true;
        }
    }, []);

    const nextPage = async () => {

        currentPageRef.current++;
        const users: User[] = await loadUsers(currentPageRef.current);
        if (users.length > 0) {
            setUsers(users);
        } else {
            currentPageRef.current--;
            if (btnNext.current) {
                btnNext.current.disabled = true;
            }
        }
        if (btnPrev.current) {
            btnPrev.current.disabled = false;
        }
    };

    const prevPage = async () => {
        currentPageRef.current--;
        if (currentPageRef.current <= 1) {
            console.log(currentPageRef.current);
            if (btnPrev.current) {
                btnPrev.current.disabled = true;
            }
        } else {
            if (btnNext.current) {
                btnNext.current.disabled = false;
            }
            const users: User[] = await loadUsers(currentPageRef.current);
            setUsers(users);
        }

    }
















    // const nextPage = async () => {

    //     currentPageRef.current++;
    //     const users: User[] = await loadUsers(currentPageRef.current);
    //     if (users.length > 0) {
    //         setUsers(users);
    //     } else {
    //         currentPageRef.current--;
    //         return;
    //     }
    // }

    // const prevPage = async () => {

    //     if (currentPageRef.current < 1) {
    //         return;
    //     };

    //     currentPageRef.current--;
    //     const users: User[] = await loadUsers(currentPageRef.current);
    //     setUsers(users);
    // }

    return {
        //Properties
        users,
        btnNext,
        btnPrev,

        //Methods
        nextPage,
        prevPage,
    }

}

export default useUsers
