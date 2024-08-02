
export const BasicTypes = () => {

    interface Person {
        id: number;
        name: string;
    }

    const person: Person = {
        id: 123456,
        name: "Juan José"
    };

    const age: number = 3;
    const isActive: boolean = true;
    const name = ['Alfonso', 'José', 'Figueroa', 88, true];
    const powers: string[] = ['Fuerza', 'Volar', 'Levitar']


    return (
        <>
            <h2>Tipos básicos</h2>
            <h3>Objetos</h3>
            <span style={{ color: 'red' }}>Identificación: {person.id}</span>
            <br />
            <span style={{ color: 'red' }}>Nombre: {person.name}</span>
        </>
    )
}
