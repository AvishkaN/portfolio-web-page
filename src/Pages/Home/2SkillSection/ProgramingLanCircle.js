import styled from 'styled-components';



function Page({className="",svg}) {
  return (
    <DIV className={`${className}`}>
         <div className="programing-lanvagues-circle-wrapper">
             <div className="circle">
                 
                <img src={svg} alt="" />
             </div>
         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    
    .programing-lanvagues-circle-wrapper{

        display: flex;
        justify-content: flex-start;
        /* background-color: red;  */

        @media(max-width:688px){
            justify-content: center; 
        }
        
        &:last-child{
            /* background-color: green;    */
        }

        .circle{
            border: 3px solid var(--color-primary);
            background: #fff; 
            width: 120rem;
            display: flex;
            justify-content: center; 
            align-items: center;   
            border-radius: 50%;
            /* box-sizing:content-box; */
            
            img{     
                height: 120rem; 
                /* width: 200px;
                /* width: 100%;  
                height: 100%;   */
                /* background-color: green;  */
                padding: 15rem;
            }
        }
    }
`;

export default Page;
