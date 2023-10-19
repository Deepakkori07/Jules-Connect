import { configureStore } from "@reduxjs/toolkit";
import  add  from "./Reducers/OrganisationSlice";
import  addMaterial  from "./Reducers/MaterialSlice";
import  addTrader  from "./Reducers/TraderSlice";
import  addCategory  from "./Reducers/CategorySlice";
import  addSubAdmin  from "./Reducers/SubAdminSlice";
import  addUnits  from "./Reducers/UnitSlice";
import  addCurrency  from "./Reducers/CurrencySlice";
import  addIncoTerm  from "./Reducers/IncoTermSlice";
import  addLocation  from "./Reducers/LocationSlice";
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
    materials: addMaterial,
    traders: addTrader,
    categories: addCategory,
    subAdmin: addSubAdmin,
    units: addUnits,
    currency: addCurrency,
    incoTerm: addIncoTerm,
    location:addLocation,
});

const persistedReducer = persistReducer (persistConfig, reducer);

const Store = configureStore({
    reducer: persistedReducer,
});

export default Store;