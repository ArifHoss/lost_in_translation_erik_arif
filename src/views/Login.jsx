import LoginForm from "../components/Login/LoginForm"
import '../App.css'
const Login = () => {
    return (
        <div className='login_container'>
            <div className='login_container__title'>
                <h1>Lost in Translation</h1>
                <h4>Get started</h4>
            </div>
            {/*<h1>Login</h1>*/}
            <LoginForm/>
        </div>
    )
}
export default Login