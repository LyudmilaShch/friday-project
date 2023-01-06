import React from 'react'
import {Route, Routes} from "react-router-dom";
import {Login} from "../../../features/login/Login";
import {Registration} from "../../../features/registration/Registration";
import {ProFile} from "../../../features/proFile/ProFile";
import {Error404} from "../../../features/errors/Error404";
import {PasswordRecovery} from "../../../features/password/PasswordRecovery";
import {EnterNewPassword} from "../../../features/password/EnterNewPassword";
import {Test} from "../../../features/test/Test";


export const Routers = () => {
    return (
        <Routes>
            <Route path={"/login"} element={<Login/>}/>
            <Route path={"/registration"} element={<Registration/>}/>
            <Route path={"/profile"} element={<ProFile/>}/>
            <Route path={"/error404"} element={<Error404/>}/>
            <Route path={"/passwordRecovery"} element={<PasswordRecovery/>}/>
            <Route path={"/enterNewPassword"} element={<EnterNewPassword/>}/>
            <Route path={"/test"} element={<Test/>}/>
        </Routes>
    )
}