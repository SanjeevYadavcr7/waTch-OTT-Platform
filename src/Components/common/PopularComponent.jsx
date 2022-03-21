import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { getYear } from '../../utils/getYear';
import { FaStar, FaPlay } from 'react-icons/fa';
import FilterComponent from '../FilterComponent';
import { device } from '../../utils/device';

function PopularComponent() {
  const [moviesList, setMoviesList] = useState([]);
  const [moviesData, setMovies] = useState([]);
  const navigate = useNavigate();

  const getMovieList = async () => {
    const isAlreadyFetched = localStorage.getItem('movies');
    if (isAlreadyFetched) {
      setMoviesList(JSON.parse(isAlreadyFetched));
      setMovies(JSON.parse(isAlreadyFetched));
    } else {
      const data = await fetch(
        'https://movie-task.vercel.app/api/popular?page=1'
      );
      const movies = await data.json();
      localStorage.setItem('movies', JSON.stringify(movies.data.results));
      setMoviesList(movies.data.results);
      setMovies(movies.data.results);
    }
  };

  const getMovie = (id) => {
    navigate(`/movie/${id}`);
  };

  const handleYearChange = (year) => {
    if (year === 'Year') setMovies(moviesList);
    else {
      const filteredMovies = moviesList.filter(
        (movie) => getYear(movie) === parseInt(year)
      );
      setMovies(filteredMovies);
    }
  };

  useEffect(() => {
    getMovieList();
  }, []);

  return (
    <Wrapper>
      <p>
        Popular Movies
        <FilterComponent handleYearChange={(e) => handleYearChange(e)} />
      </p>
      <Grid>
        {moviesData
          ? moviesData.map((movie) => {
              return (
                <Card key={movie.id} onClick={() => getMovie(movie.id)}>
                  <Title>
                    {movie.title}
                    <Star>
                      <FaStar />
                      {movie.vote_average}/10
                    </Star>
                  </Title>

                  <Button>
                    <FaPlay />
                  </Button>
                  <img
                    src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                    alt={movie.title}
                  />
                  <Gradient />
                </Card>
              );
            })
          : 'No Movies found'}
      </Grid>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 4rem 0rem;
  padding: 1rem 4rem;
  p {
    font-size: 1.4rem;
    font-weight: 600;
    color: #333;
    margin-bottom: 2rem;
    display: flex;
    align-items: center;
  }
  @media ${device.mobileL && device.tablet && device.laptop} {
    padding: 0 0.5rem;
    p {
      display: flex;
      justify-content: space-between;
    }
  }
  @media ${device.mobileL} {
    margin: 0;
    padding: 0;
    margin-top: 3rem;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
  @media ${device.mobileL} {
    grid-gap: 2rem;
  }
`;

const Card = styled.div`
  min-height: 15rem;
  border-radius: 1rem;
  overflow: hidden;
  position: relative;
  img {
    border-radius: 1rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  :hover {
    Button {
      display: block;
    }
  }
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  height: 3rem;
  background: white;
  color: #333;
  z-index: 10;
  font-size: 0.9rem;
  font-weight: 600;
  position: absolute;
  bottom: 0;
  margin-bottom: 5%;
  margin-left: 5%;
  border-radius: 0.7rem;
  padding: 1rem;
`;

const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.9)
  );
`;

const Button = styled.button`
  width: 4rem;
  height: 4rem;
  background: rgba(200, 200, 200, 0.4);
  border-radius: 50%;
  border: none;
  position: absolute;
  top: 30%;
  left: 40%;
  z-index: 30;
  svg {
    margin-top: 7%;
    margin-left: 6%;
    color: white;
    font-size: 1.3rem;
  }
  cursor: pointer;
  display: none;
`;

const Star = styled.div`
  background: red;
  padding: 0.3rem 0.5rem;
  border-radius: 0.5rem;
  color: white;
  font-weight: 600;
  font-size: 0.7rem;
  letter-spacing: 0.05rem;
  min-width: 4rem;
  display: flex;
  justify-content: center;
  svg {
    margin-right: 5%;
    margin-top: 3%;
  }
`;

export default PopularComponent;
