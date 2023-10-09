import {createSlice,nanoid} from "@reduxjs/toolkit";

const initialState={
    organisations: [],
};

export const OrganisationSlice = createSlice({
    name:'organisation',
    initialState,
    reducers:{
        add: (state, action) => {
            state.organisations.push({...action.payload,id: nanoid()})
        },
        update: (state, action)=> {
            state.organisations = state.organisations.map((organisations) => 
            organisations.id === action.payload.id?{...action.payload}:{...organisations}
            )
        },
    },
});

export const {add,update} = OrganisationSlice.actions;

export default OrganisationSlice.reducer