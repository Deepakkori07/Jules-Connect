import { configureStore } from "@reduxjs/toolkit";
import  add  from "./Reducers/OrganisationSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";


const persistConfig = {
    key: "root",
    version: 1,
    storage,
};

const reducer = combineReducers({
    organisations: add,
});

const persistedReducer = persistReducer (persistConfig, reducer);

const Store = configureStore({
    reducer: persistedReducer,
});

export default Store;