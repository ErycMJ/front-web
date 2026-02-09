import { Link } from 'react-router-dom';
import { BackGroundContainer, ConteudoContainer, NavegarContainer, BotaoTextoContainer } from './style';
import { TitleContainer } from '../Title/style';
import { ParagraphContainer } from '../../Paragraph/style';
import { welcomeContent } from './aboutSiteData';

export default function WelcomePage() {
    return (
        <BackGroundContainer>
            <ConteudoContainer>
                {
                    welcomeContent.map((item, index) => {
                        if (item.type === 'title') {
                            return <TitleContainer key={index}><strong>{item.text}</strong></TitleContainer>;
                        } else {
                            return <ParagraphContainer key={index}>{item.text}</ParagraphContainer>;
                        }
                    })
                }
            </ConteudoContainer>

            <Link to="/Donations">
                <NavegarContainer><BotaoTextoContainer><strong>NAVEGAR</strong></BotaoTextoContainer></NavegarContainer>
            </Link>
        </BackGroundContainer>
    );
}

