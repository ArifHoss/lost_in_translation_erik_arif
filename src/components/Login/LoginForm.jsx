import {useForm} from 'react-hook-form'
import {loginUser} from "../../api/user";
import {useState, useEffect} from "react";
import {storageSave} from "../../utils/storage"
import {useNavigate} from 'react-router-dom'
import {useUser} from "../../context/UserContext"
import {STORAGE_KEY_USER} from "../../const/storageKeys"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";

// Config for username validation
const usernameConfig = {
    required: true,
    minLength: 3
}
const LoginForm = () => {

    //Hooks
    const {register, handleSubmit, formState: {errors}} = useForm()
    const {user, setUser} = useUser()
    const navigate = useNavigate()

    // Local State
    const [loading, setLoading] = useState(false)
    const [apiError, setApiError] = useState(null)


    // Side Effects
    useEffect(() => {
        if (user !== null) {
            navigate('profile')
        }
    }, [user, navigate]) //Empty deps - Only run 1ce

    //Event Handles
    // handles the form submit
    const onSubmit = async ({username}) => {
        setLoading(true)
        const [error, userResponse] = await loginUser(username)
        if (error !== null) {
            setApiError(error)
        }

        // set the user in the context
        // and in the local storage
        if (userResponse !== null) {
            storageSave(STORAGE_KEY_USER, userResponse)
            setUser(userResponse)
        }
        setLoading(false)
    }


    //Render Functions
    // creates a error message for the username input
    const errorMessage = (() => {
        if (!errors.username) {
            return null
        }

        if (errors.username.type === 'required') {
            return <span>Username is required</span>
        }

        if (errors.username.type === 'minLength') {
            return <span>Username is too short (min 3 characters)</span>
        }
    })()

    return (
        <div className='loginform_container'>
            {/*<div >*/}
            {/*    <h1>Lost in Translation</h1>*/}
            {/*    <h4>Get started</h4>*/}
            {/*</div>*/}
            <form onSubmit={handleSubmit(onSubmit)}>
                <fieldset className='form_fieldset'>

                        <label htmlFor="username">Username: </label>
                        <input
                            type="text"
                            placeholder="What's your name?"
                            {...register('username', usernameConfig)}/>
                        {errorMessage}
                        <button type="submit" disabled={loading}>
                            <FontAwesomeIcon icon={faArrowRight}/>
                        </button>

                </fieldset>

                {loading && <p>Logging in...</p>}
                {apiError && <p> {apiError}</p>}

            </form>
        </div>
    )
}
export default LoginForm