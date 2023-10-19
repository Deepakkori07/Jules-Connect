import {createSlice,nanoid} from "@reduxjs/toolkit";

const initialState={
    units: [],

};
export const UnitSlice = createSlice({
    name:'Unit',
    initialState,
    reducers:{
        addUnits: (state, action) => {
            state.units.push({...action.payload,id: nanoid()})
        },
        updateUnits: (state, action)=> {
            state.units = state.units.map((units) => 
            units.id === action.payload.id?{...action.payload}:{...units}
            )
        },  
        archiveUnits: (state, action)=> {
            state.units = state.units.map((units) => 
            units.id === action.payload.id?{...units,isArchive:1}:{...units}
            )
        },
        unarchiveUnits: (state, action)=> {
            state.units = state.units.map((units) => 
            units.id === action.payload.id?{...units,isArchive:0}:{...units}
            )
        },
        
    },
});

export const {addUnits,updateUnits, archiveUnits,unarchiveUnits} = UnitSlice.actions;

export default UnitSlice.reducer