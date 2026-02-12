import styled from 'styled-components';

const ParagraphContainer = styled.p`
    display: flex;
    text-align: center;
    font-family: ${props => props.theme.font2};
    color: ${props => props.theme.var04};
`;

export { ParagraphContainer };