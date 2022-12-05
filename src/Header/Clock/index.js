import { StyledClock } from "./styled";
import { useCurrentDate } from "./useCurrentDate"

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

 export const Clock = () => {
    const date = useCurrentDate();

    return (
            <StyledClock>
                Dzisiaj jest {formatDate(date)}, {formatTime(date)}
            </StyledClock>
    )
};

export default Clock;