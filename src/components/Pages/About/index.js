import React from 'react';
import { Wrapper, Logo, Name, Description, SocialNetworks, SocialLink, SocialLogo } from './styled';
import logoReact from './../../../assets/images/react.png';

function About() {
  return (
    <Wrapper>
      <Logo src={logoReact} />
      <Name>My name is Anatoliy Zolotukhin</Name>
      <Description> I am a Front-end developer from Novosibirsk, 23 years old</Description>
      <SocialNetworks>
        <SocialLink href='https://vk.com/supertoliq' target='_blank'>
          <SocialLogo vk />
        </SocialLink>
        <SocialLink href='https://github.com/Nordstyle' target='_blank'>
          <SocialLogo gh />
        </SocialLink>
        <SocialLink href='https://novosibirsk.hh.ru/resume/79235e5fff03a61bbd0039ed1f79744f624748' target='_blank'>
          <SocialLogo hh />
        </SocialLink>
        <SocialLink href='https://t.me/supertoliq' target='_blank'>
          <SocialLogo tlg />
        </SocialLink>
      </SocialNetworks>
    </Wrapper>
  );
}

export default About;