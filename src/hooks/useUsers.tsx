import React, { useRef, useState } from 'react'
import { User } from '../interfaces';

interface Props {
    numPage: number;
    allUsers: User[];
}

const useUsers = ({ numPage, allUsers }: Props) => {
    const [users, setUsers] = useState<User[]>(allUsers);
    const currentPageRef = useRef<number>(numPage);



    return
}

export default useUsers
