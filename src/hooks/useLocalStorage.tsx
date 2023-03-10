import { useState, Dispatch, SetStateAction, useEffect } from "react";
export function useLocalStorage<T>(
  key: string,
  defaultValue?: T | (() => T)
): [T, Dispatch<SetStateAction<T>>] {
  const [storedData, setValue] = useState<T>(() => {
    try {
      const data = localStorage.getItem(key);
      return data !== null ? JSON.parse(data) : defaultValue;
    } catch {
      return defaultValue;
    }
  });

  const setLocalStorage = (value: any) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      setValue(value);
    } catch (e) {
      console.log(e);
    }
  };

  return [storedData, setLocalStorage];
}
