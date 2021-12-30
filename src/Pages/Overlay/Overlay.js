import styled from 'styled-components';
import {AllComponentHideFN} from './../../Redux/slices/clickSlice';
import SingleProjectComponent from './SingleProjectComponnet/SingleProjectComponent';
import MobileNav from './../../Components/Nav/MobileNav.js/MobileNav';
// import {useDispatch} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux'; 
import { selectClicks } from './../../Redux/slices/clickSlice';

import {useSelector } from 'react-redux';



function Overlay({className=""}) {

  const dispatch=useDispatch();
  const userClick=useSelector(selectClicks);

  const handleClick=(e)=>{
    const ISselectCloseBtn=e.target.closest('.close-svg');
    const ISclickedWrapper=e.target.classList[0]==="overlay-content";

    console.log(ISclickedWrapper || ISselectCloseBtn);
    if(ISclickedWrapper || ISselectCloseBtn){


      dispatch(AllComponentHideFN());
    }
  };

  return (
    <DIV className={`${className}`} onClick={handleClick}>
         <div className="overlay-wrapper">
                <div className="overlay-content cursor-p">

                 {userClick.showSingleProjectComponent &&  <SingleProjectComponent></SingleProjectComponent>}
                    {userClick.showMobileNav &&<MobileNav></MobileNav>}

                </div>
         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    background: #000000b0;
    height: 100%;
    position: absolute; 
    top: 0;
    left: 0; 
    z-index: 500;
    
    .overlay-wrapper{

    }
`;

export default Overlay;
