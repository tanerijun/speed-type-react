import { useState } from "react";
import useWords from "./useWords";

export type State = "start" | "run" | "end";

const NUMBER_OF_WORDS = 20;

export default function useGame() {
  const [state, setState] = useState<State>("start");
  const { words, updateWords } = useWords(NUMBER_OF_WORDS);

  return { state, words };
}
