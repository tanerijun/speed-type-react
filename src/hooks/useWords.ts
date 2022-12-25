import { faker } from "@faker-js/faker";
import { useCallback, useState } from "react";

function generateWords(count: number) {
  return faker.random.words(count).toLowerCase();
}

export default function useWords(count: number) {
  const [words, setWords] = useState<string>(generateWords(count));

  const updateWords = useCallback(() => {
    setWords(generateWords(count));
  }, [count]);

  return { words, updateWords };
}
