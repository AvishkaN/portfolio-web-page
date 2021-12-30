import styled from 'styled-components';
import Button from '../../../Components/UI/button';



function Page({className=""}) {
  return (
    <DIV className={`${className}`}>
         <div className="header-wrapper">

         <div className="col text">
            <p className="title"><span className="green-color">Hi, I am</span>   Avishka Nirmitha   </p>
             <p className="description margin-t-22">
                 {/* A passionate Full Stack Web Developer and  experience of building Web applications with HTML / CSS / JavaScript / Reactjs */}
           
                 I am Avishka. A web developer. I enjoy creating things on internet . 
                  web development started back in 2020 . I decided learn HTML,CSS ,Javascript, 
                  react js and node js . I build some projects using that. 
                  (you can see it my project page) . I
                  self study and with my hard work to satisfy my internship at your 
                  company and also willing to learn more from this internship. 
                  I like learn more about web development.I am looking internship for frondend development               
          
           
           
             </p>
            <Button text={"see my cv "} className='btn margin-t-22'/>
        </div>

        <div className="col img">
             <svg className=""  xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 512 512" style={{enableBackground: 'new 0 0 512 512'}} xmlSpace="preserve"> <g> <path style={{fill: '#32BEA6'}} d="M0,260.908l174.648-81.136v38.568l-132.08,57.848v0.728l132.08,57.848v38.568L0,292.204V260.908z" /> <path style={{fill: '#32BEA6'}} d="M201.616,387.9l77.864-263.8h36.752l-77.864,263.8H201.616z" /> <path style={{fill: '#32BEA6'}} d="M512,293.284L337.352,373.34v-38.568l134.992-57.848v-0.728l-134.992-57.848V179.78L512,259.82 V293.284z" /> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </svg>
        </div>

         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: 55px; */
    margin-top: 110px;
    /* margin-bottom: var(--margin-b-90); */
    /* background-color: green;  */
    /* min-height: 100vh;  */

    
    .header-wrapper{
        /* width: 93%; */
        /* background-color: green; */
        /* margin: 0 auto; */
        display: flex;
        justify-content: space-between; 
        align-items: center;


        .text{
            flex-basis: 60%;


                .title{   
                    font-size: var(--font-size-title);
                    font-weight: bold;
                    /* margin-top: 55px; */


                    .green-color{
                        color: var(--color-primary);
                        font-size: inherit; 
                    }
                }

                .description{
                    font-family: Alata;
                     /* font-size: 22rem; */
                     font-size: var(--Alata-font);


                }

                .btn{
                    /* background-color: red; */
                    width: 40%;  
                    margin-top: 70rem;
                }
            
        }

        .img{
            flex-basis: 40%;
            display: flex;
            justify-content: center; 

            svg{
                width: 300rem; 
            }
        }
    }
`;

export default Page;
