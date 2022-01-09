import styled from 'styled-components';
import ProjectSection from './ProjectSection';
import FilderDataById from './../../Functions/FilderDataById';
import Data from './../../Data/Data';
import CourseProjectData from './../../Data/CourseProjectData';

import {selectClicks, SelectProject, ShowSingleProjectComponentFN} from './../../Redux/slices/clickSlice';
import {useDispatch,useSelector} from 'react-redux'; 



function ProjectPage({className="",}) {

  const dispatch=useDispatch();  
  // const click=useSelector(selectClicks);

   

  const handleClick=(e)=>{
    console.log(e.target);
    console.log(e.target?.closest('.project-item-box-wrapper')?.classList[0]);

    const IsClickedBoxItemContainer=e.target?.closest('.project-item-box-wrapper')?.classList;

    if(IsClickedBoxItemContainer[0]){

      const projectItemBoxId=e.target.closest(".project-item-boxx").classList[2]; // get clicked projectid

        const FilteredObj=FilderDataById(projectItemBoxId,[...Data,...CourseProjectData]); // filter project by id

        dispatch(SelectProject(FilteredObj[0]));                   //  set selected project toredux state
        dispatch(ShowSingleProjectComponentFN());     // display single project Component

      
    }   


  };




  return (
    <DIV className={`${className}`} onClick={handleClick}>
         <div className="ProjectPage-wrapper">
         <ProjectSection text="projects"  className='projection-section'  Data={Data}></ProjectSection>
         <ProjectSection text="projects with tutorials"  className='projection-section'  Data={CourseProjectData}></ProjectSection>
         {/* <ProjectSection text="projects with tutorials" className='projection-section' description={"This projects i build with youtube/udemy tutorials "}></ProjectSection>
         <ProjectSection text="extension" className='projection-section'></ProjectSection> */}
         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* background: aqua;   */
    margin-top: var(--margin-top-fix-nav); 
    /* background-color: aqua;  */
    min-height: 100vh; 
    
    .ProjectPage-wrapper{
        /* background: aqua;  */
        width: 90%;
        margin-left: auto;
        margin-right: auto;

        .projection-section{
            margin-top: 130rem;    
            
            &:nth-child(1) {
                margin-top: 0rem;    

            }
        }

    }
`;

export default ProjectPage;
