import styled from "styled-components";

const HeaderContainer = styled.header`
    width: 100%;
    height: 60px;
    background-color: var(--var04);
    display: flex;
    position: fixed;
    box-shadow: 2px 0px 7px rgb(68, 43, 14);
    top: 0;
    z-index: 1;
    align-items: center;
    justify-content: space-between;
`;

const LogoContainer = styled.img`
    width: 60px;
    height: 55px;
    margin-left: 20px;
    position: relative;
`;

const NameContainer = styled.p`
    position: relative;
    color: var(--var02);
    margin-left: 15px;
    font-size: 50px;
    font-family: 'font1';
`;

const LinkContainer = styled.a`
    display: flex;
    align-items: center;
    space-between: auto;
`;

const ProfileContainer = styled.img`
    width: 45px;
    height: 45px;
    cursor: pointer;
    margin-right: 24px;

    &:hover {
        transform: scale(1.1);
    }
`;

export { HeaderContainer, LogoContainer, NameContainer, LinkContainer, ProfileContainer };