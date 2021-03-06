import styled from 'styled-components';
import CircleContainer from "./CircleContainer";



function Page({className=""}) {
  return (
    <DIV className={`${className}`}>
         <div className="skill-bottom-wrapper">
             <CircleContainer className="circle-container"/>
         </div>
    </DIV>
  );
}




const DIV=styled.div`
    width: 100%;
    /* background-color: aqua; */
    
    .skill-bottom-wrapper{
        /* background-color: aqua; */
        .circle-container{
            /* background-color: green; */
            width :100%;
            margin-left: auto;
            margin-right: auto;

            .circle-container-wrapper{     
               /* background-color: red;  */
               display: flex;   
                justify-content:space-between; 

                @media(max-width:688px){
                    /* flex-direction: column; */
                    /* width: 50%;  */
                    flex-wrap: wrap; 
                    /* justify-content: center;  */
                    justify-content: space-around; 

                    &>*{
                        width: 50%; 
                    }
                }
            }

        }

    }
`;

export default Page;
