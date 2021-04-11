import { useEffect, useState } from "react";

import styled from "styled-components";

import axios from "axios";

//components
import HeroCards from "../components/HeroCards";
import Table from "../components/Table";
import SearchBar from "../components/SearchBar";

const HomePageSection = styled.section`
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
const StockDetailsTabularData = styled.section`
  width: 100%;
`;

const NameSearchContainer = styled.div`
  /* border: 1px solid red; */
  width: 100%;
  background-color: #5b859e;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  & > h5 {
    font-weight: 600;
    font-size: 1.6rem;
    font-family: var(--montserat);
    text-transform: uppercase;
    text-align: center;
    padding: 1rem 0;

    border-radius: 0.5rem 0.5rem 0 0;
  }

  & > div {
    width: 35rem;
    height: max-content;
  }

  @media screen and (max-width: 50rem) {
    justify-content: space-around;
  }
`;
const Paginate = styled.div`
  border: 1px solid #aeb0c1;
  width: 100%;
  height: 6.5rem;
  margin: 2rem 0;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
  align-items: center;
  padding: 0 2rem;
  & > div {
    width: 30rem;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
    align-items: center;
    & > button {
      padding: 1rem;
      cursor: pointer;
    }

    & > p {
      font-family: var(--roboto);
      font-size: 1.2rem;
    }
  }
`;
const HomePage = () => {
  const [getData, setGetData] = useState("");
  const [fetchedStock, setFetchedStock] = useState([]);
  const [page, setPage] = useState("");
  const [totalPage, setTotalPage] = useState("");

  const fetchStocksHandler = async (p = 1) => {
    const { data } = await axios.post("/api/data", { data: p });
    setGetData(data.data);
    setPage(data.page);
    setTotalPage(data.pages);
  };

  const nextPageHandler = (p) => {
    fetchStocksHandler(p);
  };
  const prevPageHandler = (p) => {
    fetchStocksHandler(p);
  };

  useEffect(() => {
    // console.log(page);
    console.log(getData);
    fetchStocksHandler();
  }, []);

  return (
    <HomePageSection>
      <HeroCards />
      <StockDetailsTabularData>
        <NameSearchContainer>
          <h5>Stock Data Details</h5>
          <div>
            <SearchBar
              fetchedStock={fetchedStock}
              setFetchedStock={setFetchedStock}
            />
          </div>
        </NameSearchContainer>
        <Table comp={"home"} getData={getData} setGetData={setGetData} />
      </StockDetailsTabularData>
      <Paginate>
        <div>
          <p>{page}</p>
          <p>of</p>
          <p>{totalPage}</p>
          <button
            onClick={() => {
              let p = page - 1;
              if (p < 1) p = totalPage;
              prevPageHandler(p);
            }}
          >
            Prev
          </button>
          <button
            onClick={() => {
              let p = page + 1;
              if (p > totalPage) p = 1;
              nextPageHandler(p);
            }}
          >
            Next
          </button>
        </div>
      </Paginate>
    </HomePageSection>
  );
};

export default HomePage;
