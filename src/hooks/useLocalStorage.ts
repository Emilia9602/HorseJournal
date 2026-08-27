import { useState } from "react";

const useLocalStorage = <T,>(key: string, initialValue: T) => {

    const getStoredValue = (): T => {
        if (typeof window === "undefined") return initialValue;

        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch {
            return initialValue;
        }
    };

    const [value, setValue] = useState<T>(getStoredValue);

    const setStoredValue = (newValue: T) => {
        try {
            setValue(newValue);
            localStorage.setItem(key, JSON.stringify(newValue));
        } catch (error) {
            console.log("localStorage.error", error);
        }
    };

    return [value, setStoredValue] as const;
}

export default useLocalStorage;