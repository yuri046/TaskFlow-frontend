import { useTranslation } from "react-i18next";
import RegisterFormComponent from "../../components/Forms/RegisterForm";
import styles from './Register.module.css'
import { NavLink } from "react-router-dom";

const Register = ()=>{
    const {t} = useTranslation("register")
    return <div className={styles.container}>
        <RegisterFormComponent/>
        <div>
            {t("to_login1")}
            <NavLink to="/login">{t("to_login2")}</NavLink>
        </div>
    </div>
}

export default Register