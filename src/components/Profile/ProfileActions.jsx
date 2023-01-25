import {Link} from "react-router-dom"
import {storageDelete} from "../../utils/storage"
import {STORAGE_KEY_USER} from "../../const/storageKeys"
import {useUser} from "../../context/UserContext"

const ProfileActions = () => {

    const {setUser} = useUser()


    const handleLogoutClick = () => {
        if(window.confirm('Are you sure you want to logout?')){
            storageDelete(STORAGE_KEY_USER, null)
            setUser(null)
        }
    }
    return (
        <ul>
            <li> <Link to="/translation">Translations</Link> </li>
            <li><button>Clear history</button></li>
            <li><button onClick={handleLogoutClick}>Logout</button></li>
        </ul>
    )
 }

 export default ProfileActions