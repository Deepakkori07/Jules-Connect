import {createSlice,nanoid} from "@reduxjs/toolkit";

const initialState={
    subAdmin: [],

};

export const SubAdminSlice = createSlice({
    name:'admin',
    initialState,
    reducers:{
        addSubAdmin: (state, action) => {
            state.subAdmin.push({...action.payload,id: nanoid()})
        },
        updateSubAdmin: (state, action)=> {
            state.subAdmin = state.subAdmin.map((subAdmin) => 
            subAdmin.id === action.payload.id?{...action.payload}:{...subAdmin}
            )
        },  
        archiveSubAdmin: (state, action)=> {
            console.log("action",action.payload);
            state.subAdmin = state.subAdmin.map((subAdmin) => 
            subAdmin.id === action.payload.id?{...subAdmin,isArchive:1}:{...subAdmin}
            )
        },
        unarchiveSubAdmin: (state, action)=> {
            console.log("actionunarchive",action.payload);
            state.subAdmin = state.subAdmin.map((subAdmin) => 
            subAdmin.id === action.payload.id?{...subAdmin,isArchive:0}:{...subAdmin}
            )
        },
        
    },
});

export const {addSubAdmin,updateSubAdmin, archiveSubAdmin,unarchiveSubAdmin} = SubAdminSlice.actions;

export default SubAdminSlice.reducer