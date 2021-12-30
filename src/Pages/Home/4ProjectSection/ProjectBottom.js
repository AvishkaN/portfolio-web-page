import styled from 'styled-components';
import Button from '../../../Components/UI/button';
import {Link} from 'react-router-dom';



function Page({className=""}) {
  return (
    <DIV className={`${className}`}>
         <div className="projects-wrapper">
           <Link to="/projects">
              <Button className='project-btn' text="See All Projects" />
           </Link>
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
