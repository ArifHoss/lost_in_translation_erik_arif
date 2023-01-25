import {useForm} from "react-hook-form"
import {useUser} from "../../context/UserContext"
import {translateAdd} from "../../api/translate"
const TranslationForm = () => {

    const { register, handleSubmit, formState: {errors} } = useForm();
    const {user} = useUser()

    const onSubmit = async ({translate}) => {


        const [error, result] = await translateAdd(user,translate)

        console.log('error', error)
        console.log('result', result)

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