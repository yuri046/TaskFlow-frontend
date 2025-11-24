import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import login_pt from './locale/pt-BR/login.json';
import register_pt from './locale/pt-BR/register.json';
import login_en from './locale/en-US/login.json';
import register_en from './locale/en-US/register.json'
import updateUser_pt from './locale/pt-BR/updateUser.json'
import commom_pt from './locale/pt-BR/commom.json'

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                login: login_en,
                register: register_en
            },
            pt: {
                login: login_pt,
                register: register_pt,
                updateUser: updateUser_pt,
                commom: commom_pt
            }
        }, 
        ns: ["login", "register", "updateUser", "commom"],
        lng: 'pt',
        fallbackLng: 'en',
        interpolation: {escapeValue: false},
    });

export default i18n;