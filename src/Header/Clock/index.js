import { StyledClock } from "./styled";
import { useCurrentDate, formatDate, formatTime } from "./useCurrentDate"

 export const Clock = () => {
    const date = useCurrentDate();

    return (
            <StyledClock>
                Dzisiaj jest {formatDate(date)}, {formatTime(date)}
            </StyledClock>
    )
};

export default Clock;