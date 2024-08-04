
export const ObjectLiterals = () => {
    interface Person {
        nombre: string;
        apellido: string;
        age: number;
        address: Address;
        isAlive?: boolean;
    }

    interface Address {
        country: string;
        houseNo: number;
    }

    const persona: Person = {
        nombre: 'Alfonso',
        age: 16,
        apellido: "De Lannoy",
        isAlive: true,
        address: {
            country: 'Canadá',
            houseNo: 0
        },
    }

    const { address } = persona

    return (
        <>
            <h3>
                Objetos literales
            </h3>
            <pre>
                {JSON.stringify(persona, null, 2)}
            </pre>
            <pre>
                {address.country}
            </pre>
        </>
    )
}

