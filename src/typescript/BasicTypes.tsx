
export const BasicTypes = () => {

    interface Person {
        id: number;
        name: string;
    }

    const name: Person = {
        id: 123456,
        name: "Juan José"
    };

  return (
    <>
    <h3>Tipos básicos</h3>
    {name.id}
    </>
  )
}
