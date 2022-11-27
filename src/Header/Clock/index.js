import "./style.css";
import { useCurrentDate } from "./useCurrentDate"

const Clock = () => {
    const date = useCurrentDate();

    const FormatDate = (date) => date.toLocaleDateString("pl", {
        weekday: "long",
        day: "numeric",
        month: "long",
    });

    const FormatTime = (date) => date.toLocaleTimeString("pl", {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
    });

    return (
            <div className="clock">
                Dzisiaj jest {FormatDate(date)}, {FormatTime(date)}
            </div>
    )
};

export default Clock;