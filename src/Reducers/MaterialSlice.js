import {createSlice,nanoid} from "@reduxjs/toolkit";

const initialState={
    materials: [],

};

export const MaterialSlice = createSlice({
    name:'material',
    initialState,
    reducers:{
        addMaterial: (state, action) => {
            state.materials.push({...action.payload,id: nanoid()})
        },
        updateMaterial: (state, action)=> {
            state.materials = state.materials.map((materials) => 
            materials.id === action.payload.id?{...action.payload}:{...materials}
            )
        },  
        archiveMaterial: (state, action)=> {
            console.log("action",action.payload);
            state.materials = state.materials.map((materials) => 
            materials.id === action.payload.id?{...materials,isArchive:1}:{...materials}
            )
        },
        unarchiveMaterial: (state, action)=> {
            console.log("actionunarchive",action.payload);
            state.materials = state.materials.map((materials) => 
            materials.id === action.payload.id?{...materials,isArchive:0}:{...materials}
            )
        },
        
    },
});

export const {addMaterial,updateMaterial, archiveMaterial,unarchiveMaterial} = MaterialSlice.actions;

export default MaterialSlice.reducer