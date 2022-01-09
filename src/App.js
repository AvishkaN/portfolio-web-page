import styled from 'styled-components';
import {useEffect} from 'react';

import HomePage from './Pages/Home/HomePage';
import Nav from './Components/Nav/NavBarPage';
import AboutPage from './Pages/AboutPage/AboutPage';
import ProjectPage from './Pages/ProjectPage/ProjectPage';
import BlogPage from './Pages/BlogPage/BlogPage';
import Fotter from './Components/Footer/Fotter';


import Overlay from './Pages/Overlay/Overlay';
import NightModeIcon from './Components/UI/NightModeIcon';

import {useSelector } from 'react-redux';

import {BrowserRouter,Routes,Route,Link} from "react-router-dom";
import { selectClicks } from './Redux/slices/clickSlice';


// import Nav from './Pages';
// import Nav from './../src/assets/fonts/augustina/web';



function App() {

  const userClick=useSelector(selectClicks);


  (function () {  // hide scroll bar when opened project box

    console.log(userClick.showOverlay);
    if(userClick.showOverlay){
      
      document.documentElement.style.overflow = 'hidden';
      window.scroll(0, 0);

      // console.log(`🏗🏗🏗`);
      // console.log(document.documentElement.style.overflow);
      // console.log(document.documentElement);
    }else{
      console.log(`🏗🏗🏗`);
      document.documentElement.style.overflow = 'inherit';
    }

    // if(userClick.showMobileNav){
    //   document.body.getElementsByClassName("NavMobile000")[0].style.transform="translateX(0%)";
    // }

  })();


  useEffect(() => {  // night mode


    const selectCSS= document.body.style;

    const white="#fff";
    const black="#000";
    const colorPrimary="var(--color-primary)";



    if(userClick.nightMode){

      selectCSS.setProperty('--color-white', black);
      selectCSS.setProperty('--color-black',white);
      selectCSS.setProperty('--color-secondary', 'var(--color-primary)');
      selectCSS.setProperty('--nav-footer-background', '#259249');
      selectCSS.setProperty('--color-active-class', 'var(--color-black)');
      selectCSS.setProperty('--social-media-icon-border', 'var(--color-black)');
      selectCSS.setProperty('--mobile-nav-icon', 'var(--color-black)'); 
      
    }else{
      selectCSS.setProperty('--color-white', '#fff');


      selectCSS.setProperty('--color-black',black);
      selectCSS.setProperty('--color-secondary', '#8D6767');
      selectCSS.setProperty('--nav-footer-background', '#f4f4f4');
      selectCSS.setProperty('--color-active-class', colorPrimary);
      selectCSS.setProperty('--social-media-icon-border', colorPrimary);
      selectCSS.setProperty('--mobile-nav-icon', colorPrimary); 

    }
  }, [userClick.nightMode])
  

  return (
    <DIV className="App">
      {console.log(userClick)}
         <div className="app-wrapper">
          <BrowserRouter>
                <Nav/>

                <div className="app-content">
                        <Routes>
                                    <Route path="/" element={ <HomePage></HomePage>} />
                                    <Route path="about" element={<AboutPage></AboutPage>} />
                                    <Route path="blog" element={<BlogPage></BlogPage>} />
                                    <Route path="projects" element={<ProjectPage></ProjectPage>} />
                        </Routes>
                </div>

                <Fotter/>
               {userClick.showOverlay &&  <Overlay></Overlay>}
               {<NightModeIcon className='NightModeIcon'></NightModeIcon>}
          </BrowserRouter>





         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;

    .app-wrapper{
      position: relative; 
      background: var(--color-white);      

      /* width: 99%; */
      width: 100%;
      
      .app-content{
        /* width: 80%; */
        width: var(--nav-footer-width);
        margin: 0 auto; 
      }
    }

    .NightModeIcon{
      width: 10%;
    position: absolute; 
    top: 0;
    left:0; 
    margin-top: 80vh; 
    margin-left: 92%;               
    position: fixed; 
    /* background: red;  */

    @media(max-width: 981px){
        display: none;
    }
    
    
    
    .NIghtMode-wrapper{     
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center; 
        
        margin-right: 50%; 
        overflow-y: hidden;
        background: var(--color-white);  
          

        .night-mode-icon{
            width: 60rem;  
            height: 60rem;  
            margin-right: auto;     
            transform: rotate(36deg);
            fill:var(--color-black);  

        }

    }

    }
`;

export default App;
