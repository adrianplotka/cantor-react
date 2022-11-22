import "./style.css";
import { useCurrentDate } from "./useCurrentDate"

const Clock = () => {
    const date = useCurrentDate();

    const setFormatDate = (date) => date.toLocaleDateString("pl", {
        weekday: "long",
        day: "numeric",
        month: "long",
    });

    const setFormatTime = (date) => date.toLocaleTimeString("pl", {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
    });

    return (
            <div className="clock">
                Dzisiaj jest {setFormatDate(date)}, {setFormatTime(date)}
            </div>
    )
};

export default Clock;