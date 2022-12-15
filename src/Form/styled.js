import styled from "styled-components";

export const StyledError = styled.p`
    color: ${({ theme }) => theme.color.red};
`;

export const StyledLoading = styled.p`
    margin: auto;
`;

export const StyledImg = styled.img`
    width: 200px;
`;

export const StyledForm = styled.form`
    background-color: ${({ theme }) => theme.color.akaroa};
    border-radius: 20px;
    max-width: 400px;
    height: 400px;
    margin: auto;
    padding: 20px 20px 20px 20px;
    text-align: center;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        max-width: 300px;
        height: 450px;
    }
`;

export const StyledButton = styled.button`
    width: 60%;
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

export const StyledResult = styled.div`
    max-width: 200px;
    margin: auto;
    margin-top: 30px;
    margin-bottom: 30px;
`;

export const StyledSelect = styled.select`
    width: 30%;
    background-color: ${({ theme }) => theme.color.aliceBlue};
    border: none;
    border-radius: 5px;
    padding: 4px;
    text-align: center;

    &:hover {
        filter: brightness(110%);
    }

    &:active {
        filter: brightness(120%);
    }
`;

export const StyledInput = styled.input`
    width: 50%;
    background-color: ${({ theme }) => theme.color.aliceBlue};
    border: none;
    border-radius: 5px;
    padding: 4px;
    text-align: center;
`;

