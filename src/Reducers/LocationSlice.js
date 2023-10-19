import {createSlice,nanoid} from "@reduxjs/toolkit";

const initialState={
    location: [],

};

export const LocationSlice = createSlice({
    name:'locations',
    initialState,
    reducers:{
        addLocation: (state, action) => {
            state.location.push({...action.payload,id: nanoid()})
        },
        updateLocation: (state, action)=> {
            state.location = state.location.map((location) => 
            location.id === action.payload.id?{...action.payload}:{...location}
            )
        },  
        archiveLocation: (state, action)=> {
            console.log("action",action.payload);
            state.location = state.location.map((location) => 
            location.id === action.payload.id?{...location,isArchive:1}:{...location}
            )
        },
        unarchiveLocation: (state, action)=> {
            console.log("actionunarchive",action.payload);
            state.location = state.location.map((location) => 
            location.id === action.payload.id?{...location,isArchive:0}:{...location}
            )
        },
        
    },
});

export const {addLocation,updateLocation,archiveLocation,unarchiveLocation} = LocationSlice.actions;

export default LocationSlice.reducer