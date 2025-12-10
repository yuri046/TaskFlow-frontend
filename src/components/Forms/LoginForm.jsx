import { useEffect, useState} from "react";
import { useTranslation } from "react-i18next";
import styles from "./Form.module.css"
import { Login } from "../../API/TaskFlow";
import { TASKFLOW_URL } from "../../constant/url";
import { validateEmail, validatePassword } from "../../utils/validate";
import { useNavigate, useNavigation } from "react-router-dom";


const LoginForm = () => {
    const {t} = useTranslation('login'); 
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});
    const navigate = useNavigate()

    const handleSubmit = async (e)=>{
        e.preventDefault();

        const newErrors = {};
        const newUser = {}

        validateEmail(newErrors, newUser, t, email)
        validatePassword(newErrors, newUser, t, password)
        
        setErrors(newErrors)
        console.log(newUser)

        const data = await Login(TASKFLOW_URL, newUser)
        if(data){
            localStorage.setItem("token", data["token"])
            navigate("/dashboard")
        }
        
    }

 
    return(
        
           <form  onSubmit={handleSubmit} className={styles.form}>
                <h1>TaskFlow</h1>
                <div className={styles.inputContainer}>
                    <label htmlFor="email">{t('label1')}</label>
                    <input 
                    type="email"
                    placeholder={t('email')}
        
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}
                    />
                    {errors.email && <span style={{color:'red'}}>{errors.email}</span>}
                </div>
                <div className={styles.inputContainer}>
                    <label htmlFor="password">{t('label2')}</label>
                    <input 
                    type="password"
                    placeholder={t('password')}
                  
                    value={password}
                    onChange={(e)=> setPassword(e.target.value)}
                    />
                    {errors.password && <span style={{color:'red'}}>{errors.password}</span>}
                </div>
                <input className={styles.button} type="submit" value={t("login")}/>
            </form>

            
       
    )
};

export default LoginForm;