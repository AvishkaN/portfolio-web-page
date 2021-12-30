import styled from 'styled-components';
import ProjectItemBox from './ProjectItemBox';



function ProjectItemBoxContainer({className=""}) {
  return (
    <DIV className={`${className}`}>
         <div className="ProjectItemBoxContainer-wrapper">
                <ProjectItemBox></ProjectItemBox>
                <ProjectItemBox></ProjectItemBox>
                <ProjectItemBox></ProjectItemBox>
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
