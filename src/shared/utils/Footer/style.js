import styled from "styled-components";

const FooterContainer = styled.footer`
    background-color: var(--var04);
    width: 100%;
    height: 40px;
    padding-top: 7px;
    position: fixed;
    bottom: 0;
`;

const FooterDeveloperContainer = styled.ul`
    width: 100%;
    position: relative;
    display: flex;
    justify-content: space-around;
`;

const FooterDeveloperItemContainer = styled.li`
    list-style: none
`;

const FooterLink = styled.a`
    text-decoration: none;
    color: var(--var02);
    font-family: 'font2';
    font-size: 15px;

    &:hover{
    color: var(--var03);
    transition: .2s;
}
`;

export { FooterContainer, FooterDeveloperContainer, FooterDeveloperItemContainer, FooterLink }