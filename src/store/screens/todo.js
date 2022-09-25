import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  category: [],
  selectedCategory: "",
  todos: [],
};

const todoScreen = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addCategory(state, action) {
      state.category = [...state.category , action.payload];
    },
    addTodos(state, action) {
      console.log(action.payload);
      state.todos = [...state.todos,action.payload]
    },
    removeTodo(state, action){
      state.todos = action.payload
    },
    updateTodos(state, action){
      const { id, item, completed } = action.payload;
      const existingItem = state.todos.find((el) => el.id === id);
      if (existingItem) {
        existingItem.item = item;
        existingItem.completed = completed;
      }
    },
    selectCategory(state, action){
      state.selectedCategory = action.payload
    },
  },
});

export const {addTodos, removeTodo, updateTodos, addCategory, selectCategory} = todoScreen.actions;
export default todoScreen.reducer;
