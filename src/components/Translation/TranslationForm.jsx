import {useForm} from "react-hook-form"
import {useUser} from "../../context/UserContext"
import {translateAdd} from "../../api/translate"
import {storageSave} from "../../utils/storage"
import {STORAGE_KEY_USER} from "../../const/storageKeys"

const TranslationForm = () => {

    const { register, handleSubmit, formState: {errors} } = useForm();
    const {user,setUser} = useUser()

    const onSubmit = async ({translate}) => {


        const [error, updatedUser] = await translateAdd(user,translate)


        if (error !== null) {
            return
        }

        //Keep UI state and server state in sync
        storageSave(STORAGE_KEY_USER, updatedUser)
        //upd context state
        setUser(updatedUser)

        console.log('error', error)
        console.log('updatedUser', updatedUser)


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