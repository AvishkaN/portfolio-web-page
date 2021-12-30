import styled from 'styled-components';
import AboutMeSection from '../../Pages/Home/3AboutMeSection/AboutMeSection';



function AboutPage({className=""}) {
  return (
    <DIV className={`${className}`}>
         <div className="AboutPage-wrapper">

                <AboutMeSection className='about-section'/>

         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: 90px; */
    
    .AboutPage-wrapper{
                
        .about-section{
            /* background: green; */
            min-height: 70vh; 
        }
    }
`;

export default AboutPage;
