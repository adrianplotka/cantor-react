import styled from "styled-components";

export const StyledForm = styled.form`
    background-color: hsl(45, 35%, 75%);
    border-radius: 20px;
    max-width: 400px;
    margin: auto;
    padding: 20px 20px 20px 20px;
    text-align: center;

    @media(max-width:767px) {
        max-width: 300px;
    }
`;

export const StyledButton = styled.button`
    margin: 20px 5px 0px 0px ;
    background-color: aliceblue;
    border: none;
    border-radius: 5px;
    padding: 4px;

    &:hover {
        background-color: hsl(45, 35%, 95%);
    }

    &:active {
        background-color: hsl(45, 35%, 100%);
    }

`;