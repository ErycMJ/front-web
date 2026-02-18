import imgLogo from "../../assets/logoName.png"
import imgPerfil from "../../assets/iconPerfil.png"
import { HeaderContainer, LogoContainer, NameContainer, LinkContainer, ProfileContainer } from "./style"

export default function Header() {
    return (
        <HeaderContainer>
            <LinkContainer href="/">
                <LogoContainer src={imgLogo} alt="logo donation compass" />
                <NameContainer>Donation Compass</NameContainer>
            </LinkContainer>
            <LinkContainer href="/login">
                <ProfileContainer src={imgPerfil} alt="icone perfil" />
            </LinkContainer>
        </HeaderContainer>
    );
}
