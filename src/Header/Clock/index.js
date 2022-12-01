import { StyledClock } from "./styled";
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
            <StyledClock>
                Dzisiaj jest {FormatDate(date)}, {FormatTime(date)}
            </StyledClock>
    )
};

export default Clock;