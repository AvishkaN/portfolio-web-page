import styled from 'styled-components';
import NavItemConatiner from '../Nav-item-container';
import NightModeIcon from '../../UI/NightModeIcon';



function NavMobile({className=""}) {
  return (
    <DIV className={`${className} NavMobile000`}>
         <div className="NavMobile-wrapper">

             <NightModeIcon className='nightModeIcon'></NightModeIcon>

            <NavItemConatiner className='mobile-nav'></NavItemConatiner>
         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 30%;
    transition: all .2s;
    position: relative;

    @media(max-width:600px){
        width: 43%;  
    }
    

    .nightModeIcon{
        position: absolute; 
        /* background: aqua;  */
        bottom: 9%;
        right: 5%; 


    
    
    .NIghtMode-wrapper{     
     
        
        /* margin-right: 50%;  */
        overflow-y: hidden;
        /* background: var(--color-white);   */
          

        .night-mode-icon{
            width: 45rem;  
            height: 60rem;  
            margin-right: auto;     
            transform: rotate(36deg);
            fill:var(--color-black);  
            /* fill:red;    */

        }

    }

    }
    
    .NavMobile-wrapper{
        min-height: 100vh; 
        background: var(--color-primary);
        
        .mobile-nav{
            min-height: 100vh; 
            
            /* background: #fff;  */
            
            nav{
                min-height: 100vh; 
                /* background: aqua; */
                height: 100%; 

                        display: flex;
                        flex-direction: column;
                        /* justify-content: space-evenly; */

                        li{
                            list-style: none;
                            cursor: pointer;
                            margin-top: 13%;
                            margin-left: 13%;

                            &:first-child{
                                /* background: red;  */

                            }

                            a{

                                    color: inherit;
                                    text-decoration: none;
                                    font-size: 18rem;
                                    font-weight: bold;

                            }

                            .active{
                                    /* color: var(--color-primary);  */
                                    color: #fff;   
                            }

                        }
                    }

        }

        .night-mode{
            position: absolute;
            bottom: 10%;   
            right: 10%; 
        }

    }
`;

export default NavMobile;
