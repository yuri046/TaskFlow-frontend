import { useState} from "react";
import { useTranslation } from "react-i18next";
import styles from "./RegisterForm.module.css"
import Button from "../../Button/button";

const RegisterFormComponent = ()=>{
    const {t} = useTranslation('register');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [reTypedPassword, setReTypedPassword] = useState('');
    const [errors, setErrors] = useState({});

    const handleSubmit = (e)=>{
        e.preventDefault()

        const newErrors = {}

        if(!email){
            newErrors.email = t('blank_email')
        } else if(!/\S+@\S+\.\S+/.test(email)){
            newErrors.email = t('invalid_email')
        }

        if(!name){
            newErrors.name = t("blank_name")
        }

        if(!password){
            newErrors.password = t("blank_password")
        } else if(password.length < 6 || password.length > 12){
            newErrors.password = t("password_length")
        } 

        if(!reTypedPassword){
            newErrors.reTypedPassword = t("blank_password")
        } else if(reTypedPassword != password){
            newErrors.reTypedPassword = t("blank_password_check")
        }

        setErrors(newErrors)
    }

    return(
        <div className={styles.container}>
            <form action="POST" onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.inputContainer}>
                    <label htmlFor="name">{t('label2')}</label>
                    <input 
                    type="text"
                    placeholder={t('name')} 
                    id="name"
                    onChange={(e)=> setName(e.target.value)}
                    />
                </div>
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
                    <label htmlFor="password">{t('label3')}</label>
                    <input 
                    type="password"
                    placeholder={t('password')}
                    id="password"
                    onChange={(e)=> setPassword(e.target.value)}
                    />
                    {errors.password && <span style={{color:'red'}}>{errors.password}</span>}
                </div>
                <div className={styles.inputContainer}>
                    <label htmlFor="reTypedPassword">{t('label4')}</label>
                    <input 
                    type="password" 
                    placeholder={t('password')}
                    id="reTypedPassword" 
                    onChange={(e)=> setReTypedPassword(e.target.value)}
                    />
                </div>
                
                <Button style={{color:'white'}}>{t("register")}</Button>
            </form>

            <div>{t("to_login1")}<a href="register">{t("to_login2")}</a></div>
        </div>
    )
}

export default RegisterFormComponent;