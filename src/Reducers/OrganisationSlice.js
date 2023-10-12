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
        archive: (state, action)=> {
            console.log("action",action.payload);
            state.organisations = state.organisations.map((organisations) => 
            organisations.id === action.payload.id?{...organisations,isArchive:1}:{...organisations}
            )
        },
        unarchive: (state, action)=> {
            console.log("actionunarchive",action.payload);
            state.organisations = state.organisations.map((organisations) => 
            organisations.id === action.payload.id?{...organisations,isArchive:0}:{...organisations}
            )
        },
        
    },
});

export const {add,update, archive,unarchive} = OrganisationSlice.actions;

export default OrganisationSlice.reducer