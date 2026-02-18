import styled from "styled-components";
import backgroundImage from "/images/background.png";

const BackGroundContainer = styled.div`
  background-image: url(${backgroundImage});
  background-size: cover;
  background-attachment: fixed;
  height: 100%;
  width: 100%;
  position: absolute;
  align-content: center;
  overflow-x: hidden;
`;

const ConteudoContainer = styled.div`
  width: 1000px;
  height: 60%;
  margin: auto;
  border-radius: 10px;
  position: relative;
  background-image: linear-gradient(
    to bottom,
    rgb(243, 153, 18) 50%,
    rgb(252, 122, 17)
  );
  box-shadow: 3px 3px 5px rgb(68, 43, 14);
  padding: 15px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 7px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--var04);
    border-radius: 20px;
  }
`;

const NavegarContainer = styled.button`
  cursor: pointer;
  position: relative;
  width: 300px;
  height: 30px;
  border-radius: 7px;
  border: none;
  background-color: var(--var02);
  left: 50%;
  transform: translate(-50%, 0%);
  box-shadow: 2px 2px 7px rgb(59, 27, 1);
  margin-top: 15px;

  &:hover {
    transition: 0.2s;
    background-color: var(--var03);
    transition: 0.2s;
  }
`;

const BotaoTextoContainer = styled.p`
  font-family: "font2";
  color: var(--var04);
  font-size: 22px;
  letter-spacing: 2px;
`;

export {
  BackGroundContainer,
  ConteudoContainer,
  NavegarContainer,
  BotaoTextoContainer,
};
