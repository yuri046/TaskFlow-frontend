import UpdateForm from "../../components/Forms/UpdateForm";
import UserComponent from "../../components/User/User";
import styles from "./User.module.css";

const User = ()=>{
    const user = {
        "id":1,
        "name": "joao",
        "email": "joao@gmail.com",
        "password": "12345",
        "tasks": null
    }
    return(
        <div className={styles.container}>
            <UserComponent/>
            <UpdateForm/>
        </div>
    )
}

export default User;