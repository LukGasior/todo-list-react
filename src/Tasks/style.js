import styled, { css } from "styled-components";

export const List = styled.ul`
    display: grid;
    list-style-type: none;
    padding-inline-start: 0px;
`;


export const Item = styled.li`
    display: grid;
    grid-template-columns: auto 1fr auto;
    border-bottom: 1px solid rgb(194, 194, 194);
    margin: 10px 20px;

@media(max-width: 767px) {
    text-align: center;
}

${({ hidden }) => hidden && css`
display: none;
`};

`;

export const Content = styled.span`
margin-left: 15px;
font-size: 1.1em;

${({ done }) => done && css`
text-decoration: line-through;
` };

`;

export const Button = styled.button`

${({ taskdone }) => taskdone && css`
background-color: rgb(1, 170, 9);
    border: none;
    color: white;
    float: left;

    &:hover {
        background-color: rgb(0, 114, 6);
    color: white
    }
`};

${({ taskremove }) => taskremove && css`

background-color: rgb(153, 0, 0);
    border: none;
    color: white;

    &:hover {
        background-color: rgb(255, 0, 0);
    }
`};

`;