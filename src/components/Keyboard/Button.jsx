import styled from 'styled-components';

const Button = styled.div`
    display: flex;
    padding: 4px;
    margin: 3px;
    // Hardcoding sizes for dev speed; let's revise
    width: 40px;
    height: 32px;
    border: 1px solid #c4c8cc;
    font-family: "Quicksand";
    border-radius: 10px;
    color: #fff;
    font-size: 23px;
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