import React from 'react';
import s from './main.module.css'
import {NavLink} from "react-router-dom";



export const Main = () => {
    return (
        <div>
            <nav className={s.nav}>
                <div className={s.items}>
                    <NavLink to={"/login"} className={s.active}>Логин</NavLink>
                    <NavLink to={"/registration"} className={s.active}>Регисрация</NavLink>
                    <NavLink to={"/profile"} className={s.active}>Профиль</NavLink>
                    <NavLink to={"/error404"} className={s.active}>error404</NavLink>
                    <NavLink to={"/passwordRecovery"} className={s.active}>Востановление пароля</NavLink>
                    <NavLink to={"/enterNewPassword"} className={s.active}>Ввести новый пароль</NavLink>
                    <NavLink to={"/test"} className={s.active}>Тест</NavLink>
                </div>

            </nav>
        </div>

    )
}
