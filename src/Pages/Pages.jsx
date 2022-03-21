import React from 'react';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

import SeachMoviePage from './SearchedMovie';
import HomeComponent from '../Components/HomeComponent';
import MovieComponent from '../Components/common/MovieComponent';
import PageNotFound from './404';

function Pages() {
  return (
    <Wrapper>
      <Routes>
        <Route path='/' element={<HomeComponent />} />
        <Route path='/movie/:id' element={<MovieComponent />} />
        <Route path='/search/:name' element={<SeachMoviePage />} />
        <Route path='/notification' element={<PageNotFound />} />
        <Route path='/profile' element={<PageNotFound />} />
        <Route path='/live' element={<PageNotFound />} />
        <Route path='/settings' element={<PageNotFound />} />
        <Route path='/playvideo' element={<PageNotFound />} />
      </Routes>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Pages;
