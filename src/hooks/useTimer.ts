import { useCallback, useEffect, useRef, useState } from "react";

export default function useTimer(seconds: number) {
  const [timeLeft, setTimeLeft] = useState(seconds);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const hasTimerEnded = timeLeft <= 0;
  const isRunning = intervalRef.current != null;

  const startTimer = useCallback(() => {
    if (!hasTimerEnded && !isRunning) {
      intervalRef.current = setInterval(() => {
        setTimeLeft((timeLeft) => timeLeft - 1);
      }, 1000);
    }
  }, [setTimeLeft]);

  const resetTimer = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setTimeLeft(seconds);
  }, [seconds]);

  useEffect(() => {
    if (hasTimerEnded && intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, [hasTimerEnded]);

  useEffect(() => {
    return () => clearInterval(intervalRef.current!);
  }, []);

  return { timeLeft, startTimer, resetTimer };
}
