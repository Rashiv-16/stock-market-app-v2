import HeroCard from "./HeroCard";
import styled from "styled-components";

//img
import google from "../img/google.png";
import amazon from "../img/amazon.png";
import fb from "../img/fb.png";

const HeroCardsContainer = styled.div`
  width: 100%;
  /* height: max-content; */
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  margin-bottom: 1.5rem;

  @media screen and (max-width: 70rem) {
    justify-content: space-evenly;
  }
`;

const HeroCards = () => {
  return (
    <HeroCardsContainer dropp>
      <HeroCard src={google} price={1} symbol="GOOGL" flexOrderr="2" />
      <HeroCard src={fb} price={2} symbol="FB" flexOrderr="3" />
      <HeroCard src={amazon} price={3} symbol="AMZN" flexOrderr="1" />
    </HeroCardsContainer>
  );
};

export default HeroCards;
