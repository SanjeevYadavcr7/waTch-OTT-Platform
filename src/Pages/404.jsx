import React from 'react';
import styled from 'styled-components';

const PageNotFound = () => {
  return (
    <Wrapper>
      <p>Coming soon.</p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 70vh;
  padding-top: 20rem;
  text-align: center;
  p {
    font-size: 3em;
    font-weight: 600;
  }
`;

export default PageNotFound;
