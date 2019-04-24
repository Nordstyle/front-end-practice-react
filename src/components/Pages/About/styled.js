import styled from 'styled-components';

import VK from './../../../assets/images/vk.png';
import HH from './../../../assets/images/hh.svg';
import GH from './../../../assets/images/github.png';
import TLG from './../../../assets/images/tlg.png';

export const Wrapper = styled.div`
  padding: 80px 10px;
  text-align: center;
`;

export const Logo = styled.img`
  max-width: 180px;
  width: 100%;
  margin-bottom: 14px;
`;

export const Name = styled.h2`
  font-size: 36px;
  margin-bottom: 10px;
`;

export const Description = styled.p`
  font-size: 24px;
  margin-bottom: 30px;
`;

export const SocialNetworks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SocialLink = styled.a`
  margin: 0 6px;
`;

export const SocialLogo = styled.div`
  height: 30px;
  width: 40px;
  background-position: center center;
  background-size: contain;
  background-repeat: no-repeat;
  transition: .3s;
  ${props => props.vk && `
    background-image: url(${VK});
  `}
  ${props => props.gh && `
    background-image: url(${GH});
  `}
  ${props => props.hh && `
    background-image: url(${HH});
  `}
  ${props => props.tlg && `
    background-image: url(${TLG});
  `}
  &:hover {
    transform: translateY(-4px);
  }
`;