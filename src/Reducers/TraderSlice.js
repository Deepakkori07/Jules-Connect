import {createSlice,nanoid} from "@reduxjs/toolkit";

const initialState={
    traders: [],

};

export const TraderSlice = createSlice({
    name:'trader',
    initialState,
    reducers:{
        addTrader: (state, action) => {
            state.traders.push({...action.payload,id: nanoid()})
        },
        updateTrader: (state, action)=> {
            state.traders = state.traders.map((traders) => 
            traders.id === action.payload.id?{...action.payload}:{...traders}
            )
        },  
        archiveTrader: (state, action)=> {
            console.log("action",action.payload);
            state.traders = state.traders.map((traders) => 
            traders.id === action.payload.id?{...traders,isArchive:1}:{...traders}
            )
        },
        unarchiveTrader: (state, action)=> {
            console.log("actionunarchive",action.payload);
            state.traders = state.traders.map((traders) => 
            traders.id === action.payload.id?{...traders,isArchive:0}:{...traders}
            )
        },
        
    },
});

export const {addTrader,updateTrader, archiveTrader,unarchiveTrader} = TraderSlice.actions;

export default TraderSlice.reducer