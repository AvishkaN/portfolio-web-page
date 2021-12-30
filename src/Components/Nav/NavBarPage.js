import styled from 'styled-components';
import NavItemContainer from './Nav-item-container';
import SiteLogo from '../UI/SiteLogo';
import {Link} from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

import {ShowMobileNavFN} from './../../Redux/slices/clickSlice';
import {useDispatch} from 'react-redux'; 





function Page({className=""}) {

    const dispatch=useDispatch();


    const handleClick=(e)=>{
            console.log(e.target.closest(".mobile-nav-hamberg"));
            const selectIcon=e.target.closest(".mobile-nav-hamberg");

            if(selectIcon){
                    dispatch(ShowMobileNavFN());
            }
    };

  return (
    <DIV className={`${className}`} onClick={handleClick}>
         <div className="nav-bar-wrapper">

                <MenuIcon className='mobile-nav-hamberg cursor-p'></MenuIcon>
                <div className="left">
                            <Link to="/" className='a'>
                            <SiteLogo/>
                    </Link>
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
     

        .mobile-nav-hamberg{
                color: var(--color-primary);
                font-size: 42rem;
                display: none; 

                @media screen and (max-width: 981px) {   
                        display: flex;
                }
        }

        .left{
            display: flex;
            align-items: center; 

            @media screen and (max-width: 981px) {   
                margin-left: auto;
                margin-right: auto;
            }
            
          
            a{

                
                
            }



            }
        .right{
            margin-left: auto;
            

            @media screen and (max-width: 981px) {   
       
                display: none;   
            }

            .nav-item-container{
                nav{
                    
                    li{
                        margin-left: 50px;
                        /* font-size: 13pt; */
                        font-size: var(--nav-list-font-size);
                        font-weight: bold;

      
                    }
                }
            }
        }
    }
`;

export default Page;
