import { useState } from "react";
import { useSelector } from "react-redux";
import { darkTheme, lightTheme } from "../utils/Theme";
import { useDarkMode } from "./useDarkMode";

export const useAppHook = () => {
  const todoList = useSelector((state) => state.todo.todoList);
  const [personData, setPersonData] = useState(todoList);
  const [textSearch, setTextSearch] = useState("");
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return [
    todoList,
    personData,
    setPersonData,
    textSearch,
    setTextSearch,
    theme,
    toggleTheme,
    themeMode,
  ];
};
