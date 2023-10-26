import {createSlice,nanoid} from "@reduxjs/toolkit";

const initialState={
    incoTerm: [],
};

export const IncoTermSlice = createSlice({
    name:'IncoTerms',
    initialState,
    reducers:{
        addIncoTerm: (state, action) => {
            state.incoTerm.push({...action.payload,id: nanoid()})
        },  
        updateIncoTerm: (state, action)=> {
            state.incoTerm = state.incoTerm.map((incoTerm) => 
            incoTerm.id === action.payload.id?{...action.payload}:{...incoTerm}
            )
        },
        archiveIncoTerm: (state, action)=> {
            state.incoTerm = state.incoTerm.map((incoTerm) => 
            incoTerm.id === action.payload.id?{...incoTerm,isArchive:1}:{...incoTerm}
            )
        },
        unarchiveIncoTerm: (state, action)=> {
            state.incoTerm = state.incoTerm.map((incoTerm) => 
            incoTerm.id === action.payload.id?{...incoTerm,isArchive:0}:{...incoTerm}
            )
        },
       
    },
});

export const {addIncoTerm,updateIncoTerm,archiveIncoTerm,unarchiveIncoTerm} = IncoTermSlice.actions;

export default IncoTermSlice.reducer