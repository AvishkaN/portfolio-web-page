import styled from 'styled-components';
import HomePage from './Pages/Home/HomePage';
import Nav from './Components/Nav/NavBarPage';
import Fotter from './Components/Footer/Fotter';
import Overlay from './Pages/Overlay/Overlay';
// import Nav from './Pages';
// import Nav from './../src/assets/fonts/augustina/web';



function App() {
  return (
    <DIV className="App">
         <div className="app-wrapper">
                <Nav/>

                <div className="app-content">
                    <HomePage/>
                </div>

                <Fotter/>
                {/* <Overlay></Overlay> */}
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
