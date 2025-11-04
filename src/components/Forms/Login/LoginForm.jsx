import { useState} from "react";
import { useTranslation } from "react-i18next";
import styles from "./LoginForm.module.css"
import Button from "../../Button/button";

const LoginForm = () => {
    const {t} = useTranslation('login'); 
    const {t: t_register} = useTranslation('register');
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});

    const handleSubmit = (e)=>{
        e.preventDefault();

        const newErrors = {};

        if(!email){
            newErrors.email = t('blank_email');
        } else if(!/\S+@\S+\.\S+/.test(email)){
            newErrors.email = t('invalid_email')
        } 

        if(!password){
            newErrors.password = t('blank_password')
        } else if(password.length < 6 || password.length > 12){
            newErrors.password = t('password_length')
        }

        setErrors(newErrors)

        if(Object.keys(newErrors).length === 0){
            console.log("Formulário válido")
        }
    }
    
    return(
        <div className={styles.container}>
            
            <form action="POST" onSubmit={handleSubmit} className={styles.form}>
                <h1>TaskFlow</h1>
                <div className={styles.inputContainer}>
                    <label htmlFor="email">{t('label1')}</label>
                    <input 
                    type="email"
                    placeholder={t('email')}
                    id="email"
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
                    id="password"
                    onChange={(e)=> setPassword(e.target.value)}
                    />
                    {errors.password && <span style={{color:'red'}}>{errors.password}</span>}
                </div>
                <Button style={{color:'white'}}>{t("login")}</Button>
            </form>

            <div>{t('to_register')}<a href="register">{t_register("register_2")}</a></div>
        </div>
    )
};

export default LoginForm;