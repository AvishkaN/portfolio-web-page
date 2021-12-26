import styled from 'styled-components';
import Button from '../../../Components/UI/button';



function Page({className=""}) {
  return (
    <DIV className={`${className}`}>
         <div className="projects-wrapper">
              <Button className='project-btn' text="See All Projects" />
         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    
    .projects-wrapper{

      .project-btn{
        width: 30%; 
      }
    }
`;

export default Page;
