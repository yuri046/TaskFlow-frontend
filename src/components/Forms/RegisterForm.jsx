import {useState} from "react";
import { useTranslation } from "react-i18next";
import styles from "./Form.module.css";
import {Register} from "../../API/TaskFlow";
import { TASKFLOW_URL } from "../../constant/url";
import { validateEmail, validateName, validatePassword, validateReTypedPassword } from "../../utils/validate";

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
        const newUser = {}

        validateEmail(newErrors, newUser, t)
        validatePassword(newErrors, newUser, t)
        validateReTypedPassword(newErrors, newUser, t, reTypedPassword)
        validateName(newErrors, newUser, t, name)
        setErrors(newErrors)

        if(Object.keys(newErrors).length === 0){
            Register(TASKFLOW_URL, newUser)
        }
        
    }

    return(
        
            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.inputContainer}>
                    <label htmlFor="name">{t('label2')}</label>
                    <input 
                    type="text"
                    placeholder={t('name')} 
             
                    onChange={(e)=> setName(e.target.value)}
                    />
                    {errors.name && <span style={{color:'red'}}>{errors.name}</span>}
                </div>
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
                    <label htmlFor="password">{t('label3')}</label>
                    <input 
                    type="password"
                    placeholder={t('password')}
                  
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
         
                    onChange={(e)=> setReTypedPassword(e.target.value)}
                    />
                    {errors.reTypedPassword && <span style={{color:'red'}}>{errors.reTypedPassword}</span>}
                </div>
                
                <input className={styles.button} type="submit" value={t("register")}/>
            </form>


    )
}

export default RegisterFormComponent;