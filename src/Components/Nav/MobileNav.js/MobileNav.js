import styled from 'styled-components';
import NavItemConatiner from '../Nav-item-container';



function NavMobile({className=""}) {
  return (
    <DIV className={`${className} NavMobile000`}>
         <div className="NavMobile-wrapper">
                <NavItemConatiner className='mobile-nav'></NavItemConatiner>
                dfsddf
         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 30%;
    /* transform: translateX(-140%); */
    transition: all .2s;
    
    /* background: aqua;  */
    /* margin-top: var(--margin-top-fix-nav);  */  /*only NavMobile */
    
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

    }
`;

export default NavMobile;
