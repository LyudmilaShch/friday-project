const initialState: ErrorStateType = {

}

export const errorsReducer = (state: ErrorStateType = initialState, action: ErrorActionsTypes): ErrorStateType => {
    switch (action.type) {

        default:
            return state;
    }
}


// types

export type ErrorActionsTypes = any

type ErrorStateType = {

}

