import {createSlice,nanoid} from "@reduxjs/toolkit";

const initialState={
    categories: [],

};

export const CategorySlice = createSlice({
    name:'category',
    initialState,
    reducers:{
        addCategory: (state, action) => {
            state.categories.push({...action.payload,id: nanoid()})
        },
        updateCategories: (state, action)=> {
            state.categories = state.categories.map((categories) => 
            categories.id === action.payload.id?{...action.payload}:{...categories}
            )
        },  
        archiveCategory: (state, action)=> {
            console.log("action",action.payload);
            state.categories = state.categories.map((categories) => 
            categories.id === action.payload.id?{...categories,isArchive:1}:{...categories}
            )
        },
        unarchiveCategory: (state, action)=> {
            console.log("actionunarchive",action.payload);
            state.categories = state.categories.map((categories) => 
            categories.id === action.payload.id?{...categories,isArchive:0}:{...categories}
            )
        },
        
    },
});

export const {addCategory,updateCategories, archiveCategory,unarchiveCategory} = CategorySlice.actions;

export default CategorySlice.reducer