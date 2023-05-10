import styled from "styled-components";

export const Wrapper = styled.section`
    margin: 10px auto;
    background-color: white;
    box-shadow: 0 0 5px #ddd;
`;

export const Div = styled.div`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 20px;
    border-bottom: 1px solid #ddd;
    padding: 10px;

    @media (max-width: 767px) {
        display: grid;
        grid-template-columns: 1fr;
    }
`;

export const Title = styled.h2`
    font-size: 20px;
    padding: 20px;
    margin: 0;
`;

