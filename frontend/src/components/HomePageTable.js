import { useState } from "react";

import axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";

const TableContainer = styled.div`
  width: 100%;
  border: 1px solid #5b859e;
  background-color: #f1f2f3;

  & > h1 {
    padding: 2rem;
    font-family: var(--montserat);
    text-align: center;
    font-size: 1.8rem;
    font-weight: 500;
  }
  /* padding-bottom: 1.2rem; */
`;

const NameSymbolContainer = styled.div`
  width: 100%;
  /* border: 1px solid red; */
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 4rem;

  @media screen and (max-width: 70rem) {
    padding: 2rem 2rem;
  }
`;

const CompanyName = styled.h4`
  font-family: var(--montserat);
  font-size: 1.8rem;
`;
const CompanySymbol = styled.h3`
  font-family: var(--montserat);
  font-size: 1.2rem;
  padding: 0.2rem 0.7rem;
  border-radius: 2rem;
  background-color: var(--symbol-background);
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
`;

const StylingDot = styled.div`
  background-color: var(--dot-color);
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  display: inline-block;
  margin-right: 0.5rem;
`;

const PriceActionContainer = styled.div`
  width: 100%;
  /* border: 1px solid red; */
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0.5rem 4rem;

  @media screen and (max-width: 68rem) {
    justify-content: space-evenly;
  }
`;
const MarketCapContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid #aeb0c1;
  align-self: stretch;
  width: calc(33% - 40px);
  min-width: 20rem;
  margin-bottom: 1rem;
  flex-grow: 2;
  & > h5 {
    background-color: #aeb0c1;
    border: 1px solid #aeb0c1;
    padding: 1rem;
    font-weight: 500;
    font-family: var(--roboto);
    font-size: 1.3rem;
    text-transform: uppercase;
    width: 100%;
    text-align: center;
  }

  & > p {
    font-family: var(--roboto);
    font-size: 1.3rem;
    padding: 0.5rem;
    margin: 1rem 0;
  }
`;
const CurrentPriceContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid #aeb0c1;
  align-self: stretch;
  width: calc(33% - 40px);
  min-width: 20rem;
  margin-bottom: 1rem;
  flex-grow: 2;
  & > h5 {
    background-color: #aeb0c1;
    border: 1px solid #aeb0c1;
    padding: 1rem;
    font-weight: 500;
    font-family: var(--roboto);
    font-size: 1.3rem;
    text-transform: uppercase;
    width: 100%;
    text-align: center;
  }
  & > p {
    font-family: var(--roboto);
    font-size: 1.3rem;
    padding: 0.5rem;
    margin: 1rem 0;
  }
`;
const ViewLink = styled(Link)`
  background-color: var(--primary-color);
  font-family: var(--roboto);
  text-decoration: none;
  color: black;
  font-size: 1.33rem;
  border: none;
  outline: none;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
  margin: 1rem 0;
  &:visited {
    color: black;
  }
  &:hover {
    background-color: rgba(109, 91, 208, 0.6);
  }
  &:active {
    background-color: rgba(109, 91, 208, 0.3);
  }
`;
const ActionContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid #aeb0c1;
  align-self: stretch;
  width: calc(33% - 40px);
  min-width: 20rem;
  margin-bottom: 1rem;
  flex-grow: 2;
  & > h5 {
    background-color: #aeb0c1;
    border: 1px solid #aeb0c1;
    padding: 1rem;
    font-weight: 500;
    font-family: var(--roboto);
    font-size: 1.3rem;
    text-transform: uppercase;
    width: 100%;
    text-align: center;
  }

  & > button {
    background-color: var(--secondary-color);
    border: none;
    outline: none;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    cursor: pointer;
    margin: 1rem 0;
    &:hover {
      background-color: rgba(24, 160, 251, 0.6);
    }
    &:active {
      background-color: rgba(24, 160, 251, 0.3);
    }
  }
`;

const Table = ({ getData = [], setGetData, fetchStocksHandler }) => {
  const [isSaved, setIsSaved] = useState(false);
  const [identifier, setIdentifier] = useState("");

  let mappingArray = getData;

  const saveHandler = async (symbol) => {
    await axios.post("/api/saved", { data: { symbol: symbol } });
  };

  if (mappingArray.length === 0) {
    return (
      <TableContainer>
        <h1>Loading..</h1>
      </TableContainer>
    );
  }

  const LinkorButton = (symbol) => {
    if (symbol.saved === true) {
      return <ViewLink to="/view">View</ViewLink>;
    }
    return (
      <button
        onClick={(e) => {
          const newArray = getData.filter((innerStock) => {
            // console.log(inner);
            if (innerStock.Symbol === symbol.Symbol) {
              innerStock.saved = true;
            }
            return innerStock;
            innerStock.Symbol = symbol.Symbol;
            innerStock.Name = symbol.Name;
          });
          console.log(newArray);
          setGetData(newArray);
          fetchStocksHandler();

          saveHandler(symbol.Symbol);
          // setIsSaved(true);
          setIdentifier(symbol.Symbol);
        }}
      >
        Save
      </button>
    );
  };

  const mappedData = mappingArray.map((stock) => {
    return (
      <TableContainer key={stock.Symbol + stock["Net Change"]}>
        <NameSymbolContainer>
          <CompanyName>{stock.Name}</CompanyName>
          <CompanySymbol>
            <StylingDot />
            {stock.Symbol}
          </CompanySymbol>
        </NameSymbolContainer>
        <PriceActionContainer>
          <MarketCapContainer>
            <h5>Market Cap</h5>
            <p>$ {stock["Market Cap"]}</p>
          </MarketCapContainer>
          <CurrentPriceContainer>
            <h5>Current Price</h5>
            <p>$ {stock["Net Change"]}</p>
          </CurrentPriceContainer>
          <ActionContainer>
            <h5>Action</h5>
            {LinkorButton(stock)}
          </ActionContainer>
        </PriceActionContainer>
      </TableContainer>
    );
  });
  return <> {mappedData} </>;
};

export default Table;
