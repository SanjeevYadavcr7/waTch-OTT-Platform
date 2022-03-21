import React, { useState } from 'react';
import styled from 'styled-components';
import { device } from '../../utils/device';
import { useNavigate } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';

const SearchBar = () => {
  const [input, setInput] = useState('');
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate('/search/' + input);
  };

  return (
    <Wrapper>
      <p>Discover you favorite movies.</p>
      <FormStyle onSubmit={submitHandler}>
        <div>
          <FiSearch></FiSearch>
          <input
            type='text'
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder='search a series or movie'
          />
        </div>
      </FormStyle>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 4rem;
  p {
    font-size: 1.4rem;
    font-weight: 600;
    color: #444;
  }
  @media ${device.mobileL} {
    p {
      display: none;
    }
  }
  @media ${device.tablet && device.laptop} {
    margin-top: 6rem;
    flex-direction: column;
  }
`;

const FormStyle = styled.form`
  margin: 1rem 2rem;
  width: 60%;
  div {
    position: relative;
    width: 100%;
  }
  input {
    border: none;
    border-radius: 1rem;
    background: #ecf0f1;
    font-size: 1rem;
    color: #b3b6b7;
    padding: 1rem 3rem;
    border: none;
    outline: none;
    width: 100%;
    padding-left: 4rem;
    ::placeholder {
      color: #b3b6b7;
    }
  }
  svg {
    position: absolute;
    font-size: 1.2rem;
    top: 50%;
    left: 2%;
    transform: translate(100%, -50%);
    color: #b3b6b7;
  }
  @media ${device.mobileL} {
    width: 90%;
  }
`;

export default SearchBar;
