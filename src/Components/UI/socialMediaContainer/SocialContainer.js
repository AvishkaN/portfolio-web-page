import styled from 'styled-components';

import LinkedLogo from '../../../assets/svg/social-media/linkedin.svg';
import GithubLogo from '../../../assets/svg/social-media/github.svg';
import TwitterLogo from '../../../assets/svg/social-media/twitter.svg';
import FacebookLogo from '../../../assets/svg/social-media/facebook.svg';
import InstagramLogo from '../../../assets/svg/social-media/instagram.svg';

import SocialMediaIcon from './SocialMediaIcon';



function SocialMediaConatiner({className=""}) {
  return (
    <DIV className={`${className}`}>
         <div className="social-media-container-wrapper">

                <SocialMediaIcon svg={LinkedLogo} socialMediaIcon="linkedin"  link="https://www.linkedin.com/in/avishka-nirmitha-9b4b11218/"/>
                <SocialMediaIcon svg={GithubLogo}  socialMediaIcon="github" link="https://github.com/AvishkaN"/>
                <SocialMediaIcon svg={TwitterLogo} socialMediaIcon="twitter" link="https://twitter.com/ANirmitha"/>
                <SocialMediaIcon svg={FacebookLogo} socialMediaIcon="facebook" link="https://www.facebook.com/avishka.nirmitha/"/>
                <SocialMediaIcon svg={InstagramLogo} socialMediaIcon="instagram" link="https://www.instagram.com/avishka_nirmitha/"/>
         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    
    .social-media-container-wrapper{
      display: flex;
      /* background-color: green; */

    }
`;

export default SocialMediaConatiner;
