import { nanoid } from "nanoid";
import { useEffect, useState } from "react";

const ANIMALS = ["goat", "wolf", "giraffe", "penguin", "platypus", "cuckoo"];

const generateId = () => {
  return `anonymous-${ANIMALS[Math.floor(Math.random() * ANIMALS.length)]}-${nanoid(5)}`;
};

const STORAGE_KEY = "chat_username";

export const useUsername = () => {
  const [userName, setUserName] = useState("");
  useEffect(() => {
    const name = () => {
      const stored = localStorage.getItem(STORAGE_KEY);

      if (stored) {
        setUserName(stored);
        return;
      }

      const generated = generateId();
      localStorage.setItem(STORAGE_KEY, generated);
      setUserName(generated);
    };
    name();
  }, []);
  return { userName };
};
