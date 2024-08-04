
export const BasicFunctions = () => {
    const increaseBy = (a: number, b: number): number => {
        return a + b;
    }
    return (
        <>
            <h3>Funciones</h3>
            <span>El resultado de sumar: {increaseBy(2, 32)}</span>
        </>
    )
}
