import styled from 'styled-components';

const TitleContainer = styled.h1`
    font-family: ${props => props.theme.typeFont};
    font-size: ${props => props.theme.fontSize};
    color: ${props => props.theme.color};
    text-align: center;
`;

export { TitleContainer };