import { useState} from "react";
import { useTranslation } from "react-i18next";
import styles from "./Form.module.css"


const LoginForm = () => {
    const {t} = useTranslation('login'); 
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});
    const [user, setUser] = useState({})

    const handleSubmit = (e)=>{
        e.preventDefault();

        const newErrors = {};
        const newUser = {}

        if(!email){
            newErrors.email = t('blank_email');
        } else if(!/\S+@\S+\.\S+/.test(email)){
            newErrors.email = t('invalid_email');
        } else{
            newUser.email = email;
        } 

        if(!password){
            newErrors.password = t('blank_password');
        } else if(password.length < 6 || password.length > 12){
            newErrors.password = t('password_length');
        } else {
            newUser.password = password;
        }

        setErrors(newErrors)

        if(Object.keys(newUser.length == 2)){
            setUser(newUser);
        }
    }
    
    return(
        
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