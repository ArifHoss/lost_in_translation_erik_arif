import {useUser} from "../context/UserContext"
import {Navigate} from "react-router-dom"


//this is used to make sure that if the user is not logged in, he can't access the translation page or the profile page
const withAuth = Component => props => {
    const {user} = useUser()
    if (user !== null) {
        return <Component {...props}/>
    }else{
        return <Navigate to="/"/>
    }
}

export default withAuth