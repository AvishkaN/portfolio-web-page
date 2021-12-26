import { Children } from 'react';
import styled from 'styled-components';



// function Section({className=""}) {
//   return (
//     <DIV className={`${className}`,children }>
//         {console.log(children)}
//          <div className="section-wrapper">
//                 <p className="section-title">my skills</p>

//                 <div className="bottom-content">
//                 </div>
//          </div>
//     </DIV>
//   );
// }


function Section({children,className,text}) {
    return (
      <DIV className={`${className}`}>
          {console.log(text)}
           <div className="section-wrapper">
                  <p className="section-title">{text}</p>
  
                  <div className="bottom-content">
                      {children}
                  </div>
           </div>
      </DIV>
    );
}







const DIV=styled.div`
    width: 100%;
    /* background-color: green;  */
    /* margin-top: 50rem; */
   

     
    .section-wrapper{
        /* width: 95%; */
        /* margin: 10px auto; */
        /* background-color: aqua; */

        .section-title{  
            text-transform: uppercase;
            /* font-size: 23pt; */
            font-size: var(--font-size-title);   
            font-weight: bold;
            color: var(--color-primary);
            text-align:center; 
        }

        .bottom-content{
            width: 100%;
            margin-top: var(--margin-t-42); 


            p{

                font-family: Alata;
                font-size: var(--Alata-font);
            }

        }
    }
`;

export default Section;
