import { useContext, useEffect, useRef } from "react";
import { QuizContext } from ".";

export default function QuizTimer() {
    const { timer, setTimer, setEndQuiz } = useContext(QuizContext);
    const startTimeRef = useRef(Date.now()); // Store the start time

    useEffect(() => {
        const updateTimer = () => {
            // Calculate the elapsed time in seconds based on system time
            const elapsedSeconds = Math.floor((Date.now() - startTimeRef.current) / 1000);
            const remainingTime = Math.max(0, timer.time - elapsedSeconds); // Use time to track the original time limit

            // Update timer state
            setTimer(prevTimer => ({
                ...prevTimer,
                time: remainingTime,
                started: remainingTime > 0,
            }));

            // End quiz if time runs out
            if (remainingTime <= 0) {
                setEndQuiz(true);
                return;
            }

            // Continue updating every second
            setTimeout(updateTimer, 1000);
        };

        // Start the timer if it hasn't already started
        if (timer.started && timer.time > 0) {
            startTimeRef.current = Date.now(); // Reset start time when (re)starting
            updateTimer();
        }

        return () => {
            // Cleanup any running timeouts
            clearTimeout(updateTimer);
        };
    }, [timer.started]);

    // Format time into HH:MM:SS
    const hours = Math.floor(timer.time / 3600);
    const minutes = Math.floor((timer.time % 3600) / 60);
    const seconds = timer.time % 60;

    const formatTime = (time) => time.toString().padStart(2, "0");

    return (
        <>
            <h1 className="text-[#747474] text-base font-Satoshi-Bold">
                Time Left :
            </h1>
            <div className="h-7 w-7 rounded-md bg-black text-white flex items-center justify-center font-Satoshi-Medium text-base">
                {formatTime(hours)}
            </div>
            <h1>:</h1>
            <div className="h-7 w-7 rounded-md bg-black text-white flex items-center justify-center font-Satoshi-Medium text-base">
                {formatTime(minutes)}
            </div>
            <h1>:</h1>
            <div className="h-7 w-7 rounded-md bg-black text-white flex items-center justify-center font-Satoshi-Medium text-base">
                {formatTime(seconds)}
            </div>
        </>
    );
}
