import styled from "styled-components";

export const StyledClock = styled.div`
    font-size: 15px;
    text-align: right;
    padding-right: 10px;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        text-align: center;
        padding-right: 0px;
    }
`;