import { NavLink, useNavigate } from "react-router-dom";
import styles from './Menu.module.css'
import { useTranslation } from "react-i18next";


const AsideMenu = ()=>{
    const navigate = useNavigate()
    const {t} = useTranslation("commom")

    function handleLogout(){
            localStorage.removeItem("token")
            navigate("/login")
        }
        

    return(
        <aside className={styles.container}>
            <nav >
                <ul className={styles.ul_navigation}>
                    <li>
                        <NavLink className={styles.icon} to={"/dashboard"}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                fill="none" stroke="#FFFFFF" >
                                <path d="M3 11l9-7 9 7v9a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/>
                            </svg>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={styles.icon} to={"/users/me"}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                fill="none" stroke="#FFFFFF" >
                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                                <circle cx="12" cy="7" r="4"/>
                            </svg>
                        </NavLink>
                    </li>
                </ul>   
            </nav>
            <div className={styles.icon} onClick={handleLogout}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                    fill="none" stroke="#FFFFFF" >
                    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
                    <polyline points="16 17 21 12 16 7"/>
                    <line x1="21" y1="12" x2="9" y2="12"/>
                </svg>
            </div>
        </aside>
    )
}

export default AsideMenu