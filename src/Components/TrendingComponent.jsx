import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FaPlay, FaStar } from 'react-icons/fa';
import { device } from '../utils/device';

function TrendingComponent() {
  const navigate = useNavigate();

  const getMovie = (id) => {
    navigate(`/movie/${id}`);
  };

  return (
    <Wrapper>
      <Card1 onClick={() => getMovie(634649)}>
        <Trending>
          #1 in Movies{' '}
          <span role='img' aria-labelledby='fire'>
            🔥
          </span>
        </Trending>
        <Star>
          <FaStar />
          8.2/10
        </Star>
        <Detail>
          Spider-Man: No Way Home
          <br />
          <small>2022</small>
        </Detail>
        <Button>
          <FaPlay />
        </Button>
        <Gradient />
      </Card1>
      <Card2 onClick={() => getMovie(508947)}>
        <Trending className='none'>
          #3 in Anime
          <span role='img' aria-labelledby='rocket'>
            🚀
          </span>
        </Trending>
        <Star>
          <FaStar />
          7.5/10
        </Star>
        <Detail>
          Turning Red
          <br />
          <small>2022</small>
        </Detail>
        <Button>
          <FaPlay />
        </Button>
        <Gradient />
      </Card2>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  min-height: 25rem;
  display: flex;
  justify-content: space-evenly;
  @media ${device.laptop} {
    min-height: 20rem;
  }

  @media ${device.tablet} {
    min-height: 15rem;
    justify-content: space-between;
  }

  @media ${device.mobileL} {
    flex-direction: column;
  }
`;

const Button = styled.button`
  width: 4rem;
  height: 4rem;
  background: rgba(200, 200, 200, 0.6);
  border-radius: 50%;
  border: none;
  position: absolute;
  right: 10%;
  bottom: 10%;
  z-index: 20;
  svg {
    margin-top: 7%;
    margin-left: 6%;
    color: white;
    font-size: 1.3rem;
  }
  cursor: pointer;
  @media ${device.mobileL} {
    display: none;
  }
`;

const Trending = styled.div`
  background: white;
  position: absolute;
  padding: 0.7rem;
  border-radius: 2rem;
  color: #333;
  font-size: 0.9rem;
  font-weight: 600;
  margin: 2rem 2rem;
  @media ${device.tablet} {
    margin: 1rem 1rem;
  }
  @media ${device.mobileL} {
    margin: 1rem 1rem;
  }
`;
const Detail = styled.div`
  position: absolute;
  color: white;
  z-index: 20;
  font-weight: 600;
  font-size: 1.5rem;
  margin: 19rem 3rem;
  @media ${device.tablet} {
    font-size: 1rem;
    margin: 10rem 2rem;
  }
  @media ${device.mobileL && device.laptop} {
    font-size: 1.1rem;
    margin: 11rem 2rem;
  }
`;

const Star = styled.div`
  position: absolute;
  background: rgba(200, 200, 200, 0.6);
  padding: 0.3rem 0.5rem;
  border-radius: 0.5rem;
  color: white;
  z-index: 20;
  font-weight: 500;
  font-size: 1rem;
  letter-spacing: 0.05rem;
  right: 10%;
  top: 8%;
  min-width: 5rem;
  display: flex;
  justify-content: center;
  svg {
    margin-right: 5%;
    margin-top: 3%;
  }
  @media ${device.tablet} {
    margin-top: 0%;
  }
`;

const Card1 = styled.div`
  width: 60%;
  display: flex;
  background: url('https://image.tmdb.org/t/p/original/iQFcwSGbZXMkeyKrxbPnwnRo5fl.jpg');
  border-radius: 2rem;
  background-repeat: no-repeat;
  background-size: 120% 160%;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  @media ${device.tablet} {
    border-radius: 1.5rem;
  }
  @media ${device.laptop} {
    max-height: 20rem;
    background-size: 120% 130%;
  }
  @media ${device.mobileL} {
    width: 100%;
    border-radius: 1.4rem;
    min-height: 16rem;
    background-size: 130% 100%;
  }
`;

const Card2 = styled.div`
  width: 30%;
  display: flex;
  border-radius: 2rem;
  background: url('https://image.tmdb.org/t/p/original/iPhDToxFzREctUA0ZQiYZamXsMy.jpg');
  background-repeat: no-repeat;
  background-size: 120% 100%;
  overflow: hidden;
  position: relative;
  cursor: pointer;

  @media ${device.mobileL} {
    display: none;
  }
  @media ${device.tablet} {
    width: 35%;
    border-radius: 1.5rem;
    .none {
      display: none;
    }
  }
  @media ${device.laptop} {
    max-height: 20rem;
    background-size: 120% 100%;
    .none {
      display: none;
    }
  }
`;

const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0),
    rgba(190, 10, 0, 0.8)
  );
`;

export default TrendingComponent;
