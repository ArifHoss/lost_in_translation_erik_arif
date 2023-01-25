import {useForm} from "react-hook-form"
const TranslationForm = () => {

    const { register, handleSubmit, formState: {errors} } = useForm();

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <fieldset>
                <label htmlFor="translate">Translate: </label>
                <input
                    type="text"
                    placeholder="translate this!"
                    {...register("translate", {required: true})} />

            </fieldset>
            <button type="submit">
                Translate
            </button>
        </form>
    )
}

export default TranslationForm