const initialState: LoginStateType = {
    isLoginIn: false
}

export const authReducer = (state: LoginStateType = initialState, action: AuthActionsTypes): LoginStateType => {
    switch (action.type) {

        default:
            return state;
    }
}


// types

export type AuthActionsTypes = any

type LoginStateType = {
    isLoginIn: boolean
}

