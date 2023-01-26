import {useForm} from "react-hook-form"
import {useUser} from "../../context/UserContext"
import {translateAdd} from "../../api/translate"
import {storageSave} from "../../utils/storage"
import {STORAGE_KEY_USER} from "../../const/storageKeys"
import {useState} from "react";

const TranslationForm = () => {

    const { register, handleSubmit, formState: {errors} } = useForm();
    const {user,setUser} = useUser()

    const [translationSignImages,setTranslationSignImages] = useState([])

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

        /*
        takes user input "translate" and splits it into an array of individual characters.
        It then maps over that array and returns an image element for each character, using the
        character as the file name for the image source. The image element also includes an "alt"
        attribute with the character as its value.
         */

        const chars = translate.split('')
        const images = chars.map((char) => {
            return <img src={`/img/signs/${char}.png`} alt={char}/>

        })

        // console.log(images)

        setTranslationSignImages(images)

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
            <div className='translations_box'>
                {translationSignImages}
            </div>
        </form>
    )
}

export default TranslationForm