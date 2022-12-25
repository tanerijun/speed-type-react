import { useCallback, useEffect, useRef, useState } from "react";

export default function useTimer(seconds: number) {
  const [timeLeft, setTimeLeft] = useState(seconds);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startTimer = useCallback(() => {
    console.log("Timer started.");

    intervalRef.current = setInterval(() => {
      setTimeLeft((timeLeft) => timeLeft - 1);
    }, 1000);
  }, [setTimeLeft]);

  const resetTimer = useCallback(() => {
    console.log("Timer reset");

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    setTimeLeft(seconds);
  }, [seconds]);

  useEffect(() => {
    if (timeLeft <= 0 && intervalRef.current) {
      console.log("Clear timer");

      clearInterval(intervalRef.current);
    }
  }, [timeLeft, intervalRef]);

  return { timeLeft, startTimer, resetTimer };
}
