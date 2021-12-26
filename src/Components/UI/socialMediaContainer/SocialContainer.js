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
                <SocialMediaIcon svg={LinkedLogo}/>
                <SocialMediaIcon svg={GithubLogo}/>
                <SocialMediaIcon svg={TwitterLogo}/>
                <SocialMediaIcon svg={FacebookLogo}/>
                <SocialMediaIcon svg={InstagramLogo}/>
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
