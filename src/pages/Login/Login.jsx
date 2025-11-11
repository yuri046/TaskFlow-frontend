import { useTranslation } from "react-i18next";
import LoginForm from "../../components/Forms/LoginForm";
import styles from "./Login.module.css"
import { NavLink } from "react-router-dom";

const Login = ()=>{
    const { t } = useTranslation(["login", "register"])
    return (
        <div className={styles.container}>
            <LoginForm/>
            <div>
                {t('login:to_register')}
                <NavLink to="/register">{t("register:register_2")}</NavLink>
            </div>
        </div>
    )
}

export default Login;