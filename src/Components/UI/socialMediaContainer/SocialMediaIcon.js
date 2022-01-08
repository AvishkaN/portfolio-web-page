import styled from 'styled-components';

function SocialMediaIcon({className="",svg,socialMediaIcon,link}) {
  return (
    <DIV className={`${className}`}>
         <div className="SocialMediaIcon">

           {(socialMediaIcon==="linkedin")&&(

             <a href={link}>

                <img src={svg} alt="" className='social-media-icon-img'/>
           </a>
            )}
           {(socialMediaIcon==="github")&&(

             <a href={link}>

                <img src={svg} alt="" className='social-media-icon-img'/>
           </a>
            )}
           {socialMediaIcon==="twitter"&&(

             <a href={link}>

                <img src={svg} alt="" className='social-media-icon-img'/>
           </a>
            )}
           {socialMediaIcon==="facebook"&&(

             <a href={link}>

                <img src={svg} alt="" className='social-media-icon-img'/>
           </a>
            )}
           {socialMediaIcon==="instagram"&&(

             <a href={link}>

                <img src={svg} alt="" className='social-media-icon-img'/>
           </a>
            )}





         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    margin-left: 20px;
    /* background-color: aqua; */
    
    .SocialMediaIcon{
        /* background-color: aqua;

        border:2px solid #000;  */
        a{
          display: flex;     

          .social-media-icon-img{
              display: flex;
              align-items: center;
              justify-content: center; 
              cursor: pointer;
              width: 40rem; 
              /* background-color: green; */
              border-radius: 50%;
              padding: 6rem; 
              border:2px solid var(--social-media-icon-border); 
              
              &:hover{
                  background: var(--hover-color-primary-light);
              }
              
          }
        }

        
    }
`;

export default SocialMediaIcon;
