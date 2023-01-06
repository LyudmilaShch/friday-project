import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import thunk, {ThunkAction, ThunkDispatch} from "redux-thunk";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {ErrorActionsTypes, errorsReducer} from "../../features/errors/errors-reducer";
import {AuthActionsTypes, authReducer} from "../../features/login/auth-reducer";
import {EnterPasswordActionsTypes, EnterPasswordReducer} from "../../features/password/enterPassword-reducer";
import {ProFileActionsTypes, proFileReducer} from "../../features/proFile/proFile-reducer";
import {RegistrationActionsTypes, registrationReducer} from "../../features/registration/registration-reducer";


const rootReducer = combineReducers({
    errors: errorsReducer,
    auth: authReducer,
    password: EnterPasswordReducer,
    proFile: proFileReducer,
    registration: registrationReducer,
});

export type AppRootStateType = ReturnType<typeof rootReducer>

//все типы экшенов для всего app
export type AppActionsType =
    ErrorActionsTypes
    | AuthActionsTypes
    | EnterPasswordActionsTypes
    | ProFileActionsTypes
    | RegistrationActionsTypes
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, AppActionsType>

type AppDispatchType = ThunkDispatch<AppRootStateType, any, AppActionsType>
export const AppDispatch = () =>  useDispatch<AppDispatchType>()

export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));


// @ts-ignore
window.store = store;




