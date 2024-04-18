import { RootState } from "@/store";
import { UserType } from "@/types/types";
import { createSlice } from "@reduxjs/toolkit";

interface UserState {
    user: UserType | null;
}

const initialState: UserState = {
    user: null,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        logout: (state) => {
            state.user = null;
        },
    },
});

export const { setUser, logout } = userSlice.actions;
export default userSlice.reducer;
export const UserSelector = (state: RootState) => state.user.user;
