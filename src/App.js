import styled from 'styled-components';
import HomePage from './Pages/Home/HomePage';
import Nav from './Components/Nav/NavBarPage';
import AboutPage from './Pages/AboutPage/AboutPage';
import ProjectPage from './Pages/ProjectPage/ProjectPage';
import Fotter from './Components/Footer/Fotter';


import Overlay from './Pages/Overlay/Overlay';

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
                                    <Route path="projects" element={<ProjectPage></ProjectPage>} />
                        </Routes>
                </div>

                <Fotter/>
               {userClick.showOverlay &&  <Overlay></Overlay>}
          </BrowserRouter>





         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;

    .app-wrapper{
      position: relative; 

      /* width: 99%; */
      width: 100%;
      
      .app-content{
        /* width: 80%; */
        width: var(--nav-footer-width);
        margin: 0 auto; 
      }
    }
`;

export default App;
