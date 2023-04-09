import { useState, useEffect, useRef } from "react";

function useTimer() {
  const [startTime, setStartTime] = useState(null);
  const [elapsedTime, setElapsedTime] = useState(0);
  const requestRef = useRef();

  function startTimer() {
    setStartTime(performance.now() - elapsedTime);
    requestRef.current = requestAnimationFrame(updateTimer);
  }

  function stopTimer() {
    cancelAnimationFrame(requestRef.current);
    setStartTime(null);
    setElapsedTime(0);
  }

  function updateTimer() {
    setElapsedTime(performance.now() - startTime);
    requestRef.current = requestAnimationFrame(updateTimer);
  }

  useEffect(() => {
    if (startTime) {
      requestRef.current = requestAnimationFrame(updateTimer);
    }

    return () => {
      cancelAnimationFrame(requestRef.current);
    };
  }, [startTime]);

  function formatTime(milliseconds) {
    let hours = Math.floor(milliseconds / 3600000);
    let minutes = Math.floor((milliseconds % 3600000) / 60000);
    let seconds = Math.floor((milliseconds % 60000) / 1000);
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  }

  return [formatTime(elapsedTime), startTimer, stopTimer];
}

export default useTimer;
