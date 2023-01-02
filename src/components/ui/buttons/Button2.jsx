import styled from 'styled-components';

const fontSizes = {
    sm: '0.8rem',
    md: '1rem',
    lg: '1.2rem',
}

export const Button = styled.button`
    border: none;
    border-radius: 0.15rem;
    outline: none;
    font-size: ${(props) => fontSizes[props.size] ?? fontSizes.md};
    /* background: transparent;
    color: black; */
    text-transform: uppercase;
    letter-spacing: 2px;
    padding: 0.5rem 1rem;
    cursor: pointer;
`;

export const PrimaryButton = styled(Button)`
    background: red;
    color: white;
`;