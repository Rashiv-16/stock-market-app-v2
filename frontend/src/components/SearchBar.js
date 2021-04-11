import { useState } from "react";

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

const SearchBar = ({ fetchedStock, setFetchedStock }) => {
  const [keyword, setKeyword] = useState("");
  const searchStock = async () => {
    const { data } = axios.get(`/api/search/${keyword.trim()}`);
    setFetchedStock(data);
  };

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <input
        type="text"
        onChange={(e) => {
          setKeyword(e.target.value);
        }}
        value={keyword}
        placeholder="Search by company name"
      ></input>
      <p>{fetchedStock}</p>
    </Form>
  );
};

export default SearchBar;
