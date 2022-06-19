import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IState {
    isAuth: boolean
    isLoading: boolean
    error: string
}

const initialState: IState = {
    isAuth: false,
    isLoading: false,
    error: ''
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        usersFetching(state) {
            state.isLoading = true
        },
        usersFetchingSuccess(state) {
            state.error = ''
            state.isLoading = false
        },
        usersFetchingError(state, action:PayloadAction<string>) {
            state.isLoading = false
            state.error = action.payload
        },
        setIsAuth(state, action) {
            state.isAuth = action.payload
        },
    }
})

export const {usersFetching, usersFetchingError, usersFetchingSuccess, setIsAuth} = authSlice.actions
export default authSlice.reducer
