import {useState} from "react";
import { useTranslation } from "react-i18next";
import styles from "./Form.module.css";
import Register from "../../API/TaskFlow";
import { TASKFLOW_URL } from "../../constant/url";



const RegisterFormComponent = ()=>{
    const {t} = useTranslation('register');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [reTypedPassword, setReTypedPassword] = useState('');
    const [errors, setErrors] = useState({});

    const [user, setUser] = useState({})

    const handleSubmit = (e)=>{
        e.preventDefault()

        const newErrors = {}
        const newUser = {}

        if(!name){
            newErrors.name = t("blank_name")
        } else {
            newUser.name = name
        }

        if(!email){
            newErrors.email = t('blank_email')
        } else if(!/\S+@\S+\.\S+/.test(email)){
            newErrors.email = t('invalid_email')
        } else{
            newUser.email = email
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
        } else {
            newUser.password = password
        }

        setErrors(newErrors)
        setUser(newUser)

        Register(TASKFLOW_URL, user)
    }

    return(
        
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
                    value={password}
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
                    {errors.reTypedPassword && <span style={{color:'red'}}>{errors.reTypedPassword}</span>}
                </div>
                
                <input className={styles.button} type="submit" value={t("register")}/>
            </form>


    )
}

export default RegisterFormComponent;