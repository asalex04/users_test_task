import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IUser} from '../../types';

export interface IState {
    users: IUser[]
}

const initialState: IState = {
    users: []
}

export const usersSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        getUsers(state, action: PayloadAction<IUser[]>) {
            state.users = action.payload
        },
        addUser(state, action: PayloadAction<IUser>) {
            state.users.push(action.payload)
        },
        deletePost(state, action: PayloadAction<number>){
            state.users.filter(post => post.id !== action.payload)
        }
    }
})

export const {getUsers, addUser} = usersSlice.actions
export default usersSlice.reducer
