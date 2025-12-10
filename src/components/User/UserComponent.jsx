import { useTranslation } from "react-i18next"
import styles from './UserComponent.module.css'
import img from "../../assets/user.jpg"
import { useEffect, useState } from "react"
import { GetUser } from "../../API/TaskFlow"
import { TASKFLOW_URL } from "../../constant/url"

const UserComponent = ({ user })=>{

    return (
        <div className={styles.card}>
            <img src={img} alt="" className={styles.img}/>
            <p className={styles.text}>{user.name}</p>
            <p className={styles.text}>{user.email}</p>
        </div>
    )
}

export default UserComponent;