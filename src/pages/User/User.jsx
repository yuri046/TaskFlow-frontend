import UpdateForm from "../../components/Forms/UpdateForm";
import AsideMenu from "../../components/Menu/AsideMenu";
import UserComponent from "../../components/User/UserComponent";
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
            <AsideMenu/>
            <div className={styles.subContainer}> 
                <UserComponent/>
                <UpdateForm/>   
            </div>
            
        </div>
    )
}

export default User;