import userLogo from "../../assets/user.png"
import styles from './UserComponent.module.css'
const UserComponent = ()=>{
    const user = {
        "id":1,
        "name": "joao",
        "email": "joao@gmail.com",
        "password": "12345",
        "tasks": null
    }
    return (
        <div className={styles.card}>
          <img className={styles.logo} src={userLogo} alt="user-logo" />
          <p className={styles.text}>{user.name}</p>
          <p className={styles.text}>{user.email}</p>
        </div>
    )
}

export default UserComponent;