import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';
import { device } from './utils/device';

import NavBar from './Components/common/NavBar';
import Pages from './Pages/Pages';
import SearchBar from './Components/common/SearchBar.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <Wrapper>
        <NavBar />
        <MoviesWrapper>
          <SearchBar />
          <Pages />
        </MoviesWrapper>
      </Wrapper>
    </BrowserRouter>
  );
};

const Wrapper = styled.div`
  display: flex;
  @media ${device.mobileL && device.tablet} {
    flex-direction: column;
  }
`;

const MoviesWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export default App;
