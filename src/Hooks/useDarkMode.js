import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = () => {
  const [value, setValue] = useLocalStorage("darkMode");

  const body = document.querySelector("body");

  useEffect(() => {
    value ? body.classList.add("dark-mode") : body.classList.remove("dark-mode");
  }, [value, body.classList]);

  return [value, setValue];
};
