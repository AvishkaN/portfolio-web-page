import styled from 'styled-components';
import SiteLogo from '../UI/SiteLogo';
import SocialMediaContainer from '../UI/socialMediaContainer/SocialContainer';



function Footer({className=""}) {
  return (
    <DIV className={`${className}`}>
         <div className="footer-wrapper">
                <div className="footer-logo">
                <SiteLogo/>
                </div>
                <div className="footer-text">
                    <p>
                        © Copyright {new Date().getFullYear()}. All right reserved
                    </p>
                </div>
                <div className="footer-socail-container">
                  <SocialMediaContainer/>
                </div>
         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    background-color: #80808026; 
    margin-top:var(--footer-margin-t);
    
    
    .footer-wrapper{
      width: var(--nav-footer-width);
      margin:0 auto; 
      display: flex;
      align-items: center;
      justify-content: space-between;

      padding-top: 20px;  
      padding-bottom: 20px;     
      
      
      
      
      
      .footer-logo{
        /* background-color: blue; */
        
      }
      .footer-text{
        
        /* background-color: aqua; */
      }
      .footer-socail-container{
        /* background-color: purple;  */

      }
    }
`;

export default Footer;
