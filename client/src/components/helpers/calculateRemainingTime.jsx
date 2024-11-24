
// -1 for Current time is before the quiz start
//-2 for Current time is past quiz end time

export default function calculateRemainingTime(startTime, userStartTime, timeLimit, lenientTime, currentTime, alreadyStarted) {
    const start = new Date(startTime).getTime();
    
    const current = new Date(currentTime).getTime();
    const userStart = new Date(userStartTime).getTime();
    const quizEndTime = start + timeLimit * 1000;
    let leniencyEndTime = start + lenientTime * 1000;

    // Case 1: If the quiz has already started
    if (alreadyStarted) {
        if (current <= leniencyEndTime) {
            console.log("current")

            const elapsedSinceUserStart = Math.floor((current - userStart) / 1000); // In seconds
            const remainingTime = timeLimit - elapsedSinceUserStart;
            return Math.max(remainingTime); // Return remaining time
        } else {
            const elapsedTime = (current - leniencyEndTime) / 1000; // Extra time used
            console.log("elapsedTime", elapsedTime)
            const remainingTime = Math.floor((quizEndTime - start) / 1000 - elapsedTime);
            return Math.max(0, remainingTime); // Return adjusted remaining time
        }

    }

    // Case 4: If starting within leniency period
    if (current <= leniencyEndTime) {
        return Math.floor(timeLimit); // Full time limit
    }

    // Case 5: Starting after leniency period
    const elapsedTime = (current - leniencyEndTime) / 1000; // Extra time used
    console.log("elapsedTime", elapsedTime)
    const remainingTime = Math.floor((quizEndTime - start) / 1000 - elapsedTime);
    return Math.max(0, remainingTime); // Return adjusted remaining time
}
