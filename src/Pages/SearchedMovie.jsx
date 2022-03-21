import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { device } from '../utils/device';
import { useNavigate } from 'react-router-dom';
import { FaStar, FaPlay } from 'react-icons/fa';

const SearchedMovie = () => {
  let params = useParams();
  const navigate = useNavigate();
  const [searchedMovies, setSearchedMovies] = useState([]);

  const getSearchedMovies = async () => {
    const url = `https://movie-task.vercel.app/api/search?page=1&query=${params.name}`;
    const data = await fetch(url);
    const movieList = await data.json();
    setSearchedMovies(movieList.data.results);
  };

  const getMovie = (id) => {
    navigate(`/movie/${id}`);
  };

  useEffect(() => {
    getSearchedMovies(params.name);
  }, [params.name]);

  return (
    <Wrapper>
      <Grid>
        {searchedMovies.map((movie) => {
          return (
            movie.backdrop_path && (
              <Card key={movie.id}>
                <Title>
                  {movie.title}
                  <Star>
                    <FaStar />
                    {movie.vote_average}/10
                  </Star>
                </Title>

                <Button onClick={() => getMovie(movie.id)}>
                  <FaPlay />
                </Button>
                <img
                  src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                  alt={movie.title}
                />
                <Gradient />
              </Card>
            )
          );
        })}
      </Grid>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 1rem 4rem;
  p {
    font-size: 1.4rem;
    font-weight: 600;
    color: #333;
    margin-bottom: 2rem;
  }
  @media ${device.mobileL} {
    padding: 1rem;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
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

export default SearchedMovie;
