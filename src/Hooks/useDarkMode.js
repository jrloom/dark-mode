import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = () => {
  const [value, setValue] = useLocalStorage("darkMode");

  useEffect(() => {
    value ? document.querySelector("body").classList.add("dark-mode") : document.querySelector("body").classList.remove("dark-mode");
  }, [value, document.querySelector("body").classList]);

  return [value, setValue];
};
