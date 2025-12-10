import { useTranslation } from "react-i18next";
import styles from "./Form.module.css";
import { useState } from "react";
import { validateReTypedPassword, validateUpdate } from "../../utils/validate";
import { UpdateUser } from "../../API/TaskFlow";
import { TASKFLOW_URL } from "../../constant/url";

const UpdateForm = () => {
  const {t} = useTranslation('updateUser');
  const [name, setName] = useState('');
  const [email, setEmail]= useState('');
  const [password, setPassword] = useState('')
  const [reTypedPassword, setReTypedPassword] = useState('')
  const [errors, setErrors] = useState({})
  
  const handleUpdate = (e)=>{
    e.preventDefault()

    const newErrors = {}
    const newUser = {name, email, password}
    
    if(password.length > 0){
      validateReTypedPassword(newErrors, newUser, t, reTypedPassword, password)
    }
    setErrors(newErrors)

    if(Object.keys(newErrors).length === 0){
      const token = localStorage.getItem("token")
      UpdateUser(newUser, token )
    }
  }

  return (
    <form className={styles.form} onSubmit={handleUpdate}>
      <h1>Atualizar dados</h1>
      <div className={styles.inputContainer}>
        <label htmlFor="name">{t("label1")}</label>
        <input 
        type="text" 
        placeholder={t("name")} 
        onChange={(e)=>setName(e.target.value)}/>
        {errors.name && <span>{errors.name}</span>}
      </div>

      <div className={styles.inputContainer}>
        <label htmlFor="email">{t("label2")}</label>
        <input 
        type="text" 
        placeholder={t("email")} 
        onChange={(e)=>setEmail(e.target.value)}/>
        {errors.email && <span>{errors.email}</span>}
      </div>

      <div className={styles.inputContainer}>
        <label htmlFor="password">{t("label3")}</label>
        <input 
        type="password" 
        placeholder={t("password")} 
        onChange={(e)=>setPassword(e.target.value)}/>
        {errors.password && <span>{errors.password}</span>}
      </div>

      <div className={styles.inputContainer}>
        <label htmlFor="retypedPassword">{t("label4")}</label>
        <input 
        type="password" 
        placeholder={t("password")} 
        onChange={(e)=>setReTypedPassword(e.target.value)}/>
        
      </div>
      {errors.allFieldsBlank && <span style={{color:'red'}}>{errors.allFieldsBlank}</span>}
      <input className={styles.button} type="submit" value={t("register")} />
    </form>
  );
};

export default UpdateForm;