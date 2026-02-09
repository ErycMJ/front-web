import { developers } from "./DevelopersData";
import { FooterContainer, FooterDeveloperContainer, FooterDeveloperItemContainer, FooterLink } from "./style";

export default function Footer() {
    return (
        <FooterContainer>
            <FooterDeveloperContainer>
                {developers.map((developer) => (
                    <FooterDeveloperItemContainer key={developer.id}>
                        <FooterLink href={developer.link} target="blank" rel="external">
                            {developer.githubUser}
                        </FooterLink>
                    </FooterDeveloperItemContainer>
                ))}
            </FooterDeveloperContainer>
        </FooterContainer>
    );
}
