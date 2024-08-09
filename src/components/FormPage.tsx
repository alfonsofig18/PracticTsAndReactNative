import { useForm } from "react-hook-form"

interface FormInputs {
    email: string;
    password: string;

}

export const FormPage = () => {

    const { register, handleSubmit, formState, watch } = useForm<FormInputs>({
        defaultValues: {
            email: 'Alonsi',
            password: 'aaa'

        }
    });

    const onSubmit = (myForm: FormInputs) => {
        console.log({ myForm });

    }

    console.log(watch('email'));

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h3>Formularios</h3>
                <div style={{ display: "flex", flexDirection: 'column' }}>
                    <input type="text" placeholder="nombre" {...register('email', { required: true })} />
                    <input type="password" placeholder="contraseña" {...register('password')} />
                    &nbsp;
                    <button type="submit">Enviar</button>
                </div>
            </form>

            <pre>
                {JSON.stringify(formState, null, 2)}
            </pre>
        </>
    )
}
