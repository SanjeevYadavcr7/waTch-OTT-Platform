import React from 'react';
import styled from 'styled-components';
import { device } from '../utils/device';
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
  padding: 2rem;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
  @media ${device.mobileL} {
    padding: 1rem;
  }
`;

export default HomeComponent;
