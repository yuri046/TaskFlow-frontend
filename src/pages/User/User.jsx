import { GetUser } from "../../API/TaskFlow";
import UpdateForm from "../../components/Forms/UpdateForm";
import AsideMenu from "../../components/Menu/AsideMenu";
import UserComponent from "../../components/User/UserComponent";
import styles from "./User.module.css";
import { useState, useEffect } from "react";

const User = ()=>{
    const [user, setUser] = useState({})
    const token = localStorage.getItem("token")
        
        useEffect(()=>{
            const loadData = async ()=>{
                const data = await GetUser(token)
                if(data){
                    setUser(data || {})
                }
            }
    
            loadData()
        },[])
    return(
        <div className={styles.container}>
            <AsideMenu/>
            <div className={styles.subContainer}> 
                <UserComponent user={user}/>
                <UpdateForm/>   
            </div>
            
        </div>
    )
}

export default User;