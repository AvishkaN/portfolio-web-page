import styled from 'styled-components';
import ProjectSection from './ProjectSection';

import {selectClicks, ShowSingleProjectComponentFN} from './../../Redux/slices/clickSlice';
import {useDispatch,useSelector} from 'react-redux'; 



function ProjectPage({className="",}) {

  const dispatch=useDispatch();  
  const click=useSelector(selectClicks);

   

  const handleClick=(e)=>{
    console.log(e.target);
    console.log(e.target?.closest('.project-item-box-wrapper')?.classList[0]);

    const IsClickedBoxItemContainer=e.target?.closest('.project-item-box-wrapper')?.classList[0];

    if(IsClickedBoxItemContainer){
        dispatch(ShowSingleProjectComponentFN());
      
    }


  };

  // (function () {  // hide scroll bar when opened project box
  //   if(click.showSingleProjectComponent){
  //     document.documentElement.style.overflow = 'hidden';
  //   }else{
  //     document.documentElement.style.overflow = 'inherit';
  //   }

  //   // if(click.showMobileNav){
  //   //   document.body.getElementsByClassName("NavMobile000")[0].style.transform="translateX(0%)";
  //   // }

  //   // transform: translateX(-140%);
  // })();


  return (
    <DIV className={`${className}`} onClick={handleClick}>
         <div className="ProjectPage-wrapper">
         <ProjectSection text="projects"  className='projection-section' ></ProjectSection>
         <ProjectSection text="projects with tutorials" className='projection-section' description={"This projects i build with youtube/udemy tutorials "}></ProjectSection>
         <ProjectSection text="extension" className='projection-section'></ProjectSection>
         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* background: aqua;   */
    margin-top: var(--margin-top-fix-nav); 
    
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
