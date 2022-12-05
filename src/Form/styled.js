import styled from "styled-components";

export const StyledForm = styled.form`
    background-color: ${({ theme }) => theme.color.akaroa};
    border-radius: 20px;
    max-width: 400px;
    margin: auto;
    padding: 20px 20px 20px 20px;
    text-align: center;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        max-width: 300px;
    }
`;

export const StyledButton = styled.button`
    margin: 20px 5px 0px 0px ;
    background-color: ${({ theme }) => theme.color.aliceBlue};
    border: none;
    border-radius: 5px;
    padding: 4px;

    &:hover {
        filter: brightness(110%);
    }

    &:active {
        filter: brightness(120%);
    }

`;