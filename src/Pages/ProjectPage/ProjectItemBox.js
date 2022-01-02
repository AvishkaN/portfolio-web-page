import styled from 'styled-components';
// import Img from '../../assets/img/image-box.png';



function ProjectItem({className="",ProjectName,backgroundImage}) {
  return (
    <DIV className={`${className} cursor-p    project-item-boxx`}  backgroundImage='https://raw.githubusercontent.com/AvishkaN/portfolio-web-page/master/src/assets/img/1-EcommerceProjectImage.png'>
        
            {console.log( backgroundImage)}
         <div className="project-item-box-wrapper">
                    <p className="project-item-text">
                       {ProjectName} 
                    </p>

         </div>
    </DIV>
  );
}


const DIV=styled.div`
    /* width: 33.333%; */
    /* width: 26%;  */
    border-radius: 20px;
    width: 240rem;      
    height: 240rem;  
    /* background: green; */
    margin-bottom: 40rem; 

    &:hover{
        /* box-shadow: -2px 4px var(--color-primary); */
        box-shadow: 5px 8px var(--hover-color-primary-light);
    }
    
    .project-item-box-wrapper{
     
        width: 100%;
        height: 100%;  
        display: flex;
        justify-content: center;
        align-items: center; 


        background-image: -webkit-gradient(linear, left top, right bottom, from(rgba(0,0,0,0.5)), to(rgba(0,0,0,0.5))),url(${(props) => props.backgroundImage});

        background-size: cover;
        background-repeat: no-repeat;
        transition:.2s  background-size;  

     

            .project-item-text{
                color: var(--project-item-box-text); 
                font-weight: bold;
               font-size: 20rem;

            }

            .background-image{
                /* width: 100%;  */
                position: absolute;
                top: 0;
                left: 0; 
                width: 100%; 
                height: 100%; 
                overflow-y: hidden;
                img{
                    height: 100%;
                    width: 100%;
                }
            }
        
        
    }
`;

export default ProjectItem;
