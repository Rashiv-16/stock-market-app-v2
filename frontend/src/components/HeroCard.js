import styled from "styled-components";

const HeroCardContainer = styled.div`
  width: 30rem;
  /* max-width: 30rem; */
  height: 20rem;
  /* margin-bottom: 1rem; */
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  align-items: center;

  margin-bottom: 1.5rem;

  border: 2px solid var(--card-border);
  background-color: var(--card-background);
  border-radius: 0.5rem;
  user-select: none;
  cursor: grab;
  &:active {
    cursor: grabbing;
  }

  @media screen and (max-width: 50rem) {
    flex-grow: 2;
  }
`;

const SymbolLogoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 0 3rem;
`;

const Symbol = styled.h3`
  font-family: var(--montserat);
  font-size: 1.6rem;
`;

const LogoContainer = styled.div``;

const Price = styled.p`
  font-family: var(--roboto);
  font-size: 2.2rem;
`;

const HeroCard = ({ src, price, symbol, flexOrderr }) => {
  return (
    <HeroCardContainer draggable style={{ order: flexOrderr }}>
      <SymbolLogoContainer>
        <Symbol>{symbol}</Symbol>
        <LogoContainer>
          <img src={src} alt={symbol} />
        </LogoContainer>
      </SymbolLogoContainer>
      <Price>{price} USD</Price>
    </HeroCardContainer>
  );
};

export default HeroCard;
