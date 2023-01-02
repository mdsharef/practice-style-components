import styled from "styled-components";

const fontSizes = {
    sm: '0.8rem',
    md: '1rem',
    lg: '1.2rem',
}

const lineHeights = {
    sm: 1.2,
    md: 1.4,
    lg: 1.6,
}

const Label = styled.label`
    font-family: Arial, Helvetica, sans-serif;
    color: #333;
    font-size: ${props => fontSizes[props.size] ? fontSizes[props.size] : '1rem'};
    line-height: ${props => lineHeights[props.line] ? lineHeights[props.line] : 1.3};
    user-select: none;
`;

export default Label;