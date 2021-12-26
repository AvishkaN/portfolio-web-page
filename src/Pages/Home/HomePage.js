import styled from 'styled-components';
import Header from './1Header/Header';
import SkillSection from '../Home/2SkillSection/SkillSection';
import AboutMeSection from '../Home/3AboutMeSection/AboutMeSection';
import ProjectSection from '../Home/4ProjectSection/projectSection';



function HomePage({className=""}) {
  return (
    <DIV className={`${className}`}>
           <Header/> 
           <SkillSection/> 
           <AboutMeSection/> 
           <ProjectSection/> 
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    opacity: 5;   
    
    .wrapper{

    }
`;

export default HomePage;
