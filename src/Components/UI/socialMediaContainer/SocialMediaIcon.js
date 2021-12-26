import styled from 'styled-components';

function SocialMediaIcon({className="",svg}) {
  return (
    <DIV className={`${className}`}>
         <div className="SocialMediaIcon">
                <img src={svg} alt="" className='social-media-icon-img'/>
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

        
        .social-media-icon-img{
            display: flex;
            align-items: center;
            justify-content: center; 
            cursor: pointer;
            width: 40rem; 
            /* background-color: green; */
            border-radius: 50%;
            padding: 6rem; 
            border:2px solid var(--color-primary); 
            
            &:hover{
                background: var(--hover-color-primary-light);
            }
            
        }
    }
`;

export default SocialMediaIcon;
