import { useTranslation } from "react-i18next"
import styles from './UserComponent.module.css'
import img from "../../assets/user.jpg"

const UserComponent = ()=>{
    const {t} = useTranslation("commom")
    const user = {
        "id":1,
        "name": "joao",
        "email": "joao@gmail.com",
        "password": "12345",
        "tasks": null
    }

    
    return (
        <div className={styles.card}>
            <img src={img} alt="" className={styles.img}/>
            <p className={styles.text}>{user.name}</p>
            <p className={styles.text}>{user.email}</p>
        </div>
    )
}

export default UserComponent;