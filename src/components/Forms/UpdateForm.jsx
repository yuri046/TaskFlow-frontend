import { useTranslation } from "react-i18next";
import styles from "./Form.module.css";
import { useState } from "react";
import { validateAllFields, validateEmail, validateName, validatePassword, validateReTypedPassword } from "../../utils/validate";

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
    const newUser = {}
    

    validateAllFields(newErrors, t, name, email, password)
    setErrors(newErrors)
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