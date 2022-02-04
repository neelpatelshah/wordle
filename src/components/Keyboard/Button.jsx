import styled from 'styled-components';

const Button = styled.div`
    display: flex;
    padding: 4px;
    margin: 2px;
    // Hardcoding sizes for dev speed; let's revise
    border: 1px solid #c4c8cc;
    font-family: "Quicksand";
    font-weight: lighter;
    border-radius: 7px;
    color: #fff;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    user-select: none;
    // Pulled from .touchable-highlight:hover
    // TODO: update the styles on this button so I can just re-use that class, instead
    &:hover {
        cursor: pointer;
        opacity: 0.8;
        background-color: rgba(0, 0, 0, 0.1);
    }
    &:active {
        opacity: 0.8;
        background-color: rgba(0, 0, 0, 0.3);
    }
`;

export default Button;