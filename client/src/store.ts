import { configureStore } from "@reduxjs/toolkit";
import blogReducer from "./features/blogSlice";
import searchReducer from "./features/searchSlice";
import userReducer from "./features/userSlice";

export const store = configureStore({
    reducer: {
        user: userReducer,
        blog: blogReducer,
        search: searchReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
