import {Link} from "react-router-dom"
import {storageDelete, storageSave} from "../../utils/storage"
import {STORAGE_KEY_USER} from "../../const/storageKeys"
import {useUser} from "../../context/UserContext"
import {translateClearHistory} from "../../api/translate"

const ProfileActions = () => {

    const {user, setUser} = useUser()


    // this is triggered when the user clicks the logout button
    // it clears the user from the context and the local storage
    // and redirects the user to the login page (by making use of the withAuth HOC)
    const handleLogoutClick = () => {
        if (window.confirm('Are you sure you want to logout?')) {
            storageDelete(STORAGE_KEY_USER, null)
            setUser(null)
        }
    }

    // this is triggered when the user clicks the clear history button
    // it clears the user's translation history
    //it also updates the user in the context and the local storage
    const handleClearHistoryClick = async () => {
        if (!window.confirm('Are you sure you want to clear your history?\nThis action cannot be undone.')) {
            return
        }
        const [clearError] = await translateClearHistory(user.id)
        if (clearError !== null) {
            return
        }

        const updatedUser = {
            ...user,
            translations: []
        }

        storageSave(STORAGE_KEY_USER, updatedUser)
        setUser(updatedUser)

    }

    return (
        <ul>
            <li><Link to="/translation">Translations</Link></li>
            <li>
                <button onClick={handleClearHistoryClick}>Clear history</button>
            </li>
            <li>
                <button onClick={handleLogoutClick}>Logout</button>
            </li>
        </ul>
    )
}

export default ProfileActions