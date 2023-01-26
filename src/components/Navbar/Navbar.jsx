import {NavLink} from "react-router-dom"
import {useUser} from "../../context/UserContext"

const Navbar = () => {

    const {user} = useUser()

    return (
        <nav>
            {/*<ul>*/}
            {/*    <li>Lost in translation</li>*/}
            {/*</ul>*/}
            <div className='nav_title'>
                <img src="../../../public/img/logo/Logo.png" alt="logo"/>
                <h3>Lost in Translation</h3>
            </div>

            {
                user !== null &&
                <ul>
                    <li>
                        <NavLink to="/translation">Translation</NavLink>
                    </li>
                    <li>
                        <NavLink to="/profile">Profile</NavLink>

                    </li>
                </ul>

            }


        </nav>
    )
}

export default Navbar