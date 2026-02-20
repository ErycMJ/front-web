import { Link } from "react-router-dom";
import {
  BackGroundContainer,
  ConteudoContainer,
  NavegarContainer,
  BotaoTextoContainer,
} from "./style";
import { TitleContainer } from "@/shared/ui/Title/style";
import { ParagraphContainer } from "@/shared/ui/Paragraph/style";
import { welcomeContent } from "./aboutSiteData";

export default function WelcomePage() {
  return (
    <BackGroundContainer>
      <ConteudoContainer>
        {welcomeContent.map((item, index) => {
          if (item.type === "strong") {
            return (
              <TitleContainer key={index}>
                <br />
                <strong>{item.text}</strong>
                <br />
              </TitleContainer>
            );
          } else {
            return (
              <ParagraphContainer key={index}>
                <br />
                {item.text}
                <br />
              </ParagraphContainer>
            );
          }
        })}
      </ConteudoContainer>

      <Link to="/Donations">
        <NavegarContainer>
          <BotaoTextoContainer>
            <strong>NAVEGAR</strong>
          </BotaoTextoContainer>
        </NavegarContainer>
      </Link>
    </BackGroundContainer>
  );
}
