import styled from "styled-components";

export const Container = styled.main`
    background-color: ${({ theme }) => theme.color.beige};
    border-radius: 20px;
    box-shadow: rgb(34 34 34 / 20%) 0px 0px 8px 0px, rgb(34 34 34 / 20%) 0px 0px 20px 0px;
    width: 550px;
    padding-top: 20px;
    text-align: center;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        max-width: 350px;
    }
`;