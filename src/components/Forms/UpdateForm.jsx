import { useTranslation } from "react-i18next";


const UpdateForm = ()=>{
    const {t} = useTranslation("register")
    return(
        <form action="POST">
            <div>
                <label htmlFor="name">{t("label2")}</label>
                <input type="text" placeholder={t("name")}/>
            </div>
            <div>
                <label htmlFor="email">{t("label1")}</label>
                <input type="text" placeholder={t("email")}/>
            </div>
            <div>
                <label htmlFor="password">{t("label3")}</label>
                <input type="password" placeholder={t("password")}/>
            </div>
            <div>
                <label htmlFor="retypedPassword">{t("label4")}</label>
                <input type="password" placeholder={t("password ")}/>
            </div>
        </form>
    )
}

export default UpdateForm;