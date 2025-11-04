import LoginForm from "../../components/Forms/Login/LoginForm";
import styles from "./Login.module.css"

const Login = ()=>{
    return (
        <div className={styles.container}>
            <LoginForm/>
        </div>
    )
}

export default Login;