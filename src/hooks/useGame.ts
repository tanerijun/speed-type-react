import { useCallback, useEffect, useState } from "react";
import { countErrors } from "../utils/helpers";
import useTimer from "./useTimer";
import useTypings from "./useTypings";
import useWords from "./useWords";

export type State = "start" | "run" | "end";

const NUMBER_OF_WORDS = 20;
const TIMER_SECONDS = 30;

export default function useGame() {
  const [state, setState] = useState<State>("start");
  const { words, updateWords } = useWords(NUMBER_OF_WORDS);
  const { timeLeft, startTimer, resetTimer } = useTimer(TIMER_SECONDS);
  const { cursorPosition, typed, clearTyped, totalTyped } = useTypings(
    state !== "end"
  );
  const [errors, setErrors] = useState(0);
  const isStart = state === "start" && cursorPosition > 0;
  const areWordsFinished = cursorPosition === words.length;

  const sumErrors = useCallback(() => {
    const wordsReached = words.substring(0, cursorPosition);
    setErrors((prev) => prev + countErrors(typed, wordsReached));
  }, [typed, words, cursorPosition]);

  useEffect(() => {
    if (isStart) {
      setState("run");
      startTimer();
    }
  }, [isStart, startTimer, cursorPosition]);

  useEffect(() => {
    if (!timeLeft && state === "run") {
      console.log("Time's up");
      setState("end");
      sumErrors();
    }
  }, [timeLeft, state, sumErrors]);

  // If user typed all the words, generate a new list of words
  useEffect(() => {
    if (areWordsFinished) {
      console.log("All words typed");
      sumErrors();
      updateWords();
      clearTyped();
    }
  }, [
    cursorPosition,
    words,
    clearTyped,
    typed,
    areWordsFinished,
    updateWords,
    sumErrors,
  ]);

  const restartGame = useCallback(() => {
    console.log("Restarting game");
    resetTimer();
    setState("start");
    setErrors(0);
    updateWords();
    clearTyped();
  }, [clearTyped, updateWords, resetTimer]);

  return { state, words, timeLeft, typed, errors, totalTyped, restartGame };
}
