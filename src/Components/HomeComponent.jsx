import React from 'react';
import styled from 'styled-components';

import TrendingComponent from './TrendingComponent';
import PopularComponent from './common/PopularComponent';

const HomeComponent = () => {
  return (
    <Wrapper>
      <TrendingComponent />
      <PopularComponent />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 85vh;
  // border: 1px solid lightgrey;
  padding: 2rem;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

export default HomeComponent;
