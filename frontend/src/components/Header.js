import styled from "styled-components";

import { Link } from "react-router-dom";

//logo
import logo from "../img/logo.png";

const HeaderElement = styled.header`
  width: 100%;
  /* height: 6rem; */
  padding: 1rem;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  background-color: var(--header-background);
`;

const SavedStock = styled(Link)`
  font-size: 1.6rem;
  color: white;
  font-family: var(--montserat);
  text-decoration: none;
  border: 1px solid white;
  padding: 0.5rem;
  border-radius: 3px;
`;

const Header = () => {
  return (
    <HeaderElement>
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <SavedStock to="/view">Saved Stocks</SavedStock>
    </HeaderElement>
  );
};

export default Header;
