import { useEffect, useState } from "react";

import axios from "axios";

import styled from "styled-components";
// import fetchedStock from "../../../backend/models/fetchedStockData";

const Form = styled.form`
  width: 100%;
  height: 100%;

  & > input {
    width: 100%;
    padding: 1rem;
    background-color: rgba(255, 255, 255, 0.5);
    border: none;
    outline: none;
    border-radius: 2px;
    &:focus {
      border: none;
      outline: none;
    }
  }
`;

const SearchBar = ({ getData, setGetData }) => {
  const [keyword, setKeyword] = useState("");
  const [temp, setTemp] = useState("");
  const searchStock = async (key) => {
    const { data } = await axios.post(`/api/search`, { data: { search: key } });
    setTemp(data);
    // console.log(data);
  };

  useEffect(() => {
    setGetData(temp);
  }, [temp]);
  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        searchStock(keyword);
      }}
    >
      <input
        type="text"
        onChange={(e) => {
          setKeyword(e.target.value);
        }}
        value={keyword}
        placeholder="Search by Symbol name"
      ></input>
      <p>{temp && temp.Name}</p>
    </Form>
  );
};

export default SearchBar;
