import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addCategory } from "../../../store/screens/todo";

export const useHome = () => {
  const [category, setCategory] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (category === "") {
      setError("Field Required");
    } else {
      setError("");
      dispatch(addCategory(category));
      navigate("/todo");
      setCategory("");
    }
  };

  return {
    setCategory,
    handleSubmit,
    error,
    category,
  };
};
