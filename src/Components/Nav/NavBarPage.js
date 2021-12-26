import styled from 'styled-components';
import NavItemContainer from './Nav-item-container';
import SiteLogo from '../UI/SiteLogo';



function Page({className=""}) {
  return (
    <DIV className={`${className}`}>
         <div className="nav-bar-wrapper">
                <div className="left">

                    <SiteLogo/>
                </div>
                <div className="right">
                    <NavItemContainer className='nav-item-container'/>
                </div>
         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    
    background-color: #80808017; 
    background-color:var(--nav-footer-background); 
    position: fixed; 
    z-index:100;
    padding-top: 15px;
    padding-bottom: 15px;

    
    .nav-bar-wrapper{
        width: var(--nav-footer-width);
        /* background: brown; */
        margin: 0 auto;
        
        /* padding: 5px; */
        display: flex;
        align-items: center;
        /* justify-content: space-between; */

        .left{
            /* background-color: green; */
            /* flex-basis: 30%; */
            .logo{
                
                .logo-text{
                    font-family: augustina;      
                    text-transform: capitalize;
                    font-size: 24pt;
                    font-weight: bold;

                }
            }
        }
        .right{
            /* flex-basis:70%; */
            /* background-color: aqua; */
            margin-left: auto;
            /* margin-right: 50px;  */

            .nav-item-container{
                /* width: 100%; */
                nav{
                    /* width: 80%; */
                    /* margin-left: auto; */

                    /* background-color: grey; */
                    /* margin: 0 auto; */
                    /* justify-content: space-between; */
                    
                    li{
                        margin-left: 50px;
                        font-size: 13pt;
                        font-weight: bold;

                        &:first-child{ 
                            color: var(--color-primary);
                            /* background:aqua;  */
                            /* font-weight: bold; */
                        }
                    }
                }
            }
        }
    }
`;

export default Page;
