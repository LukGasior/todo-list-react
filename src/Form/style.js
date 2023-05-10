import styled from "styled-components";


export const Wrapper = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 20px;
    border-bottom: 1px solid #ddd;
    padding: 10px;
`;

export const Input = styled.input`
    padding: 10px;
    border: 1px solid #ddd;

    @media (max-width: 767px) {
        grid-template-columns: 1fr;  
}
`;

export const Button = styled.button`
    padding: 10px;
    background: rgb(0, 128, 128);
    color: white;
    padding: 10px;
    border: none;
    transition: transform 2s linear;

`;