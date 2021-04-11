//core dependencies
import axios from "axios";
import { useState, useEffect } from "react";

//installed dependencies
import styled from "styled-components";

//components
import HeroCards from "../components/HeroCards";
import ViewPageTable from "../components/ViewPageTable";

const ViewPageSection = styled.section`
  width: 100%;
  padding: 2rem 10rem;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 70rem) {
    padding: 2rem 3.5rem;
  }
`;

const TabularData = styled.section`
  width: 100%;
  /* border: 1px solid red; */
`;

const Title = styled.h2`
  font-weight: 600;
  font-size: 1.6rem;
  font-family: var(--montserat);
  text-transform: uppercase;
  width: 100%;
  /* display: grid; */
  text-align: center;
  padding: 1rem 0;
  background-color: #5b859e;
  border-radius: 0.5rem 0.5rem 0 0;
`;

const ViewPage = () => {
  const [savedStocks, setSavedStocks] = useState([]);
  const getSavedStock = async () => {
    const { data } = await axios.get("/api/saved");
    setSavedStocks(data);
  };
  useEffect(() => {
    getSavedStock();
  }, []);
  return (
    <ViewPageSection>
      <HeroCards />
      <TabularData>
        <Title>Saved Data Table</Title>
        <ViewPageTable
          comp={"view"}
          savedStocks={savedStocks}
          setSavedStocks={setSavedStocks}
          getSavedStock={getSavedStock}
        />
      </TabularData>
    </ViewPageSection>
  );
};

export default ViewPage;
