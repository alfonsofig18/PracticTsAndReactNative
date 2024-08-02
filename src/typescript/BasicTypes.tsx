
export const BasicTypes = () => {

    interface Person {
        a: number;
        b: string;
    }

    const name: Person = {
        a: 123456,
        b: "José"
    };

  return (
    <>
    <h3>Tipos básicos</h3>
    {name.b}
    </>
  )
}
