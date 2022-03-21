import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { device } from '../../utils/device';
import { useParams } from 'react-router-dom';
import { FiPlay } from 'react-icons/fi';

const MovieComponent = () => {
  let params = useParams();
  const [movie, setMovie] = useState('');

  const fetchMovie = async () => {
    const url = `https://movie-task.vercel.app/api/movie?movieId=${params.id}`;
    const data = await fetch(url);
    const movieData = await data.json();
    setMovie(movieData.data);
  };

  useEffect(() => {
    fetchMovie();
  }, [params.id]);

  return (
    <Wrapper>
      <img
        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
        alt={movie.id}
      />
      <GenreTags>
        <h3>{movie.original_title}</h3>
        <Tags>
          {movie
            ? movie.genres.map((genre) => {
                return <Genre key={genre.id}>{genre.name}</Genre>;
              })
            : ''}
        </Tags>
      </GenreTags>
      <GenreTags>
        <Button>
          Watch Now
          <FiPlay></FiPlay>
        </Button>
      </GenreTags>
      <p>{movie.overview}</p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 1rem 4rem;
  max-height: 80vh;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
  p {
    font-size: 1rem;
    margin-top: 1.5rem;
  }
  img {
    width: 100%;
    max-height: 70%;
    object-fit: cover;
    border-radius: 2rem;
  }
  @media ${device.mobileL} {
    padding: 1rem 2rem;
    img {
      border-radius: 1.2rem;
    }
  }
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  border-radius: 2rem;
  padding: 1rem 1.5rem;
  border: none;
  color: white;
  background: linear-gradient(to top right, #0057ff, #0095c5);
  font-weight: 500;
  svg {
    margin-left: 0.5rem;
    font-size: 1rem;
    color: white;
    fill: white;
  }
  @media ${device.mobileL} {
    margin-top: 1rem;
  }
`;

const GenreTags = styled.div`
  display: flex;
  align-items: center;
  @media ${device.mobileL} {
    flex-direction: column;
  }
`;

const Tags = styled.div`
  dispaly: flex;
  min-width: 40%;
  @media ${device.mobileL} {
    // border: 1px solid;
  }
`;

const Genre = styled.div`
  padding: 0.5rem 1rem;
  margin-left: 0.8rem;
  border: 1px solid red;
  border-radius: 2rem;
  font-size: 0.8rem;
  color: red;
  font-weight: 500;
  max-width: 10rem;
  text-align: center;
  float: left;

  @media ${device.mobileL} {
    margin-left: 0.3rem;
  }
`;

export default MovieComponent;
