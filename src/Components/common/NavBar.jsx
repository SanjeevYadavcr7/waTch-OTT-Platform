import React from 'react';
import styled from 'styled-components';
import { device } from '../../utils/device';
import { NavLink } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import { IoIosSettings } from 'react-icons/io';
import { FaBell, FaUser, FaPlayCircle } from 'react-icons/fa';
import { SiAirplayaudio } from 'react-icons/si';
import logo from '../../assets/images/logo2.png';

function NavBar() {
  return (
    <Bar>
      <Logo to={'/'}>
        <img src={logo} alt='logo' />
      </Logo>
      <SLink to={'/'}>
        <AiFillHome />
      </SLink>

      <SLink className='none' to={'/live'}>
        <SiAirplayaudio />
      </SLink>

      <SLink className='none' to={'/notification'}>
        <FaBell />
      </SLink>

      <SLink className='none' to={'/playvideo'}>
        <FaPlayCircle />
      </SLink>

      <SLink className='none' to={'/profile'}>
        <FaUser />
      </SLink>

      <SLink className='none' to={'/settings'}>
        <IoIosSettings />
      </SLink>
    </Bar>
  );
}

const Bar = styled.div`
  display: flex;
  border-right: 1px solid lightgrey;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 10rem;
  height: 100vh;
  img {
    width: 5rem;
  }
  @media ${device.mobileL && device.tablet} {
    width: 100%;
    height: auto;
    flex-direction: row;
    img {
      10rem;
    }
    .none{
      display: none;
    }
  }
  @media ${device.laptop}{
    width: 6rem;
  }
`;

const Logo = styled(NavLink)`
  position: absolute;
  top: 10%;
  @media ${device.mobileL} {
    top: 1rem;
    left: 2rem;
  }
  @media ${device.tablet} {
    top: 2rem;
    left: 2rem;
  }
  @media ${device.laptop} {
    img {
      width: 4rem;
    }
  }
`;

const SLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  width: 3.5rem;
  height: 3.5rem;
  cursor: pointer;
  margin-top: 1.5rem;
  transform: scale(0.8);

  svg {
    color: #999;
    font-size: 1.6rem;
  }

  &.active {
    background: linear-gradient(to top right, #0057ff, #0095c5);
    border-radius: 1rem;

    svg {
      color: white;
    }
  }
  @media ${device.mobileL} {
    display: none;
  }
  @media ${device.tablet} {
    position: absolute;
    right: 2rem;
    top: 0.5rem;
  }
`;

export default NavBar;
