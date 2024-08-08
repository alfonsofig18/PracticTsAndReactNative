import useUsers from "../hooks/useUsers";
import { User } from "../interfaces";

export const UsersPage = () => {
    const { users, nextPage, prevPage, btnNext, btnPrev } = useUsers()
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
                <button ref={btnPrev} onClick={prevPage}>Prev</button>
                &nbsp;
                <button ref={btnNext} onClick={nextPage}>Next</button>
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