import { useEffect, useState } from "react";

export const useCurrentDate = () => {
    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentDate(new Date());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return currentDate;
};

export const formatDate = (date) => date.toLocaleDateString("pl", {
    weekday: "long",
    day: "numeric",
    month: "long",
});

export const formatTime = (date) => date.toLocaleTimeString("pl", {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
});