import styled from "styled-components";


export const Wrapper = styled.span`
    align-self: center;

    @media (max-width: 767px) {
        display: grid;
        text-align: center;   
    }
`;

export const Button = styled.button`
    float: right;
    color: rgb(0, 143, 143);
    background-color: transparent;
    background-repeat: no-repeat;
    border: none;

    @media (max-width: 767px) {
      padding: 10px;  
    }

    &:hover {
        color: rgb(0, 180, 180);
    }

    &:active {
        color: rgb(0, 151, 151);
    }

    &:disabled {
        color: rgb(58, 58, 58);
    }
`;