import styled from 'styled-components';
import ProjectItemBoxsContainer from './ProjectItemBoxContainer';



function ProjectSection({className="",text="Projects",description}) {
  return (
    <DIV className={`${className}`}>
         <div className="ProjectSection-wrapper">
             <p className="project-section-text">
                {text}
             </p>
            {description &&  (
            <p className="project-section-description">
                {description}
             </p>)
             }
            <ProjectItemBoxsContainer  className='project-item-box-container'></ProjectItemBoxsContainer>

         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only ProjectSection */
    
    .ProjectSection-wrapper{

        .project-section-text{
            text-transform: uppercase;
            font-size: var(--font-size-title);
           
            font-weight: bold;
            color: var(--color-primary);
            text-align: left;
            /* margin-top: var(--inside-section-margin-t); */



        }

        .project-section-description{
            font-family: Alata;
            /* font-size: var(--Alata-font); */
            font-size:var(--inside-section-description-description);

            margin-top: var(--inside-section-margin-t);

        }

        .project-item-box-container{
            /* margin-top: var(--inside-section-margin-t); */
            margin-top: var(--inside-project-item-box-container-margin-t);

        }

    }
`;

export default ProjectSection;
