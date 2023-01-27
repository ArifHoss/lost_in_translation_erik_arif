import withAuth from "../hoc/withAuth"
import ProfileHeader from "../components/Profile/ProfileHeader"
import ProfileTranslationHistory from "../components/Profile/ProfileTranslationHistory"
import ProfileActions from "../components/Profile/ProfileActions"
import {useUser} from "../context/UserContext"
import {useEffect} from "react"
import {userById} from "../api/user"
import {storageSave} from "../utils/storage"
import {STORAGE_KEY_USER} from "../const/storageKeys"



const Profile = () => {

    const {user,setUser} = useUser()


// useEffect(() => {
//
//     const findUser = async () => {
//         const [error,latestUser] = await userById(user.id)
//         if(error === null){
//             storageSave(STORAGE_KEY_USER, latestUser )
//             setUser(latestUser)
//         }
//     }
//     // findUser()
// },[setUser,user.id])

    return (
        <>
            <h1>Profile</h1>
            <ProfileHeader username={user.username}/>
            <ProfileActions />
            <ProfileTranslationHistory translations ={user.translations}/>
        </>

    )
}

export default withAuth(Profile)