import styled from 'styled-components';
import ProjectItemBox from './ProjectItemBox';
import Data from './../../Data/Data';
import SingleProduct from '../Overlay/SingleProjectComponnet/SingleProject';



function ProjectItemBoxContainer({className=""}) {
  return (
    <DIV className={`${className}`}>
         <div className="ProjectItemBoxContainer-wrapper">
                {Data.map(project=>{
                  return(
                    <ProjectItemBox key={project.id} className={project.id}  backgroundImage={project.backgroundImage} ProjectName={project.name}></ProjectItemBox>
                )})
                }
                {/* 
                <ProjectItemBox></ProjectItemBox>
                <ProjectItemBox></ProjectItemBox> */}
         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* background: yellow;  */
    /* margin-top: var(--margin-top-fix-nav);  */  /*only ProjectItemBoxContainer */
    
    .ProjectItemBoxContainer-wrapper{
     

      display: flex;
      flex-wrap: wrap; 
      justify-content  :space-around;  
    }
`;

export default ProjectItemBoxContainer;
