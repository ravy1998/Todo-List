import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodos, removeTodo, selectCategory, updateTodos } from "../../../store/screens/todo";

export const useTodo = () => {
  const [newTodo, setNewTodo] = useState("");
  const [item, setItem] = useState(null);
  const [categorySelected, selectCategoryOnclick] = useState("");
  const [categoryList, setCategoryList] = useState([]);
  const list = useSelector((state) => state);
  const category = useSelector((state) => state.todo);
 

  const dispatch = useDispatch();
  console.log(category.todos);
  useEffect(() => {
    setCategoryList(category.category);
  }, [category.category]);

  const handleClickCategory = (item) => {
    selectCategoryOnclick(item);
    dispatch(selectCategory(item))
  }

  const handleSubmit = () => {
    if (newTodo === "") {
      alert("Input is Empty");
    } else if (!item) {
  
      let newElement ={
        id: Math.floor(Math.random() * 1000),
        item: newTodo,
        completed: false,
        category: category.selectedCategory
      }
  
      dispatch(
        addTodos(newElement)
      );
      setNewTodo("");
    } else {
      dispatch(
        updateTodos({
          id: item.id,
          item: newTodo,
          completed: false,
        })
      );
      setNewTodo("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
      // console.log("Enter key pressed ✅");
    }
  };

  const handleRemove = (id) => {
    console.log(id);
    const remove = list.todo.todos.filter((item) => item.id !== id);
    dispatch(removeTodo(remove));
  };

  const handleUpdate = (id) => {
    console.log(id);
    const updatedItem = list.todo.todos.filter((item) => item.id === id);
    setNewTodo(updatedItem[0].item);
    setItem(updatedItem[0]);
  };
  return {
    categoryList,
    newTodo,
    list,
    setNewTodo,
    handleUpdate,
    handleRemove,
    handleKeyDown,
    categorySelected,
    handleClickCategory
  };
};
