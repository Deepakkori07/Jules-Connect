import {createSlice,nanoid} from "@reduxjs/toolkit";

const initialState={
    currency: [],

};

export const CurrencySlice = createSlice({
    name:'currencies',
    initialState,
    reducers:{
        addCurrency: (state, action) => {
            state.currency.push({...action.payload,id: nanoid()})
        },
        updateCurrency: (state, action)=> {
            state.currency = state.currency.map((currency) => 
            currency.id === action.payload.id?{...action.payload}:{...currency}
            )
        }, 
        archiveCurrency: (state, action)=> {
            console.log("action",action.payload);
            state.currency = state.currency.map((currency) => 
            currency.id === action.payload.id?{...currency,isArchive:1}:{...currency}
            )
        },
        unarchiveCurrency: (state, action)=> {
            console.log("actionunarchive",action.payload);
            state.currency = state.currency.map((currency) => 
            currency.id === action.payload.id?{...currency,isArchive:0}:{...currency}
            )
        },
       
    },
});

export const {addCurrency,updateCurrency,archiveCurrency,unarchiveCurrency} = CurrencySlice.actions;

export default CurrencySlice.reducer