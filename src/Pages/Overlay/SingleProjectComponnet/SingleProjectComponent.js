import styled from 'styled-components';
// import CancelIcon from '@mui/icons-material/Cancel';
import CloseIcon from '@mui/icons-material/Close';
import SingleProduct from './SingleProject';


function SingleProjectComponent({className=""}) {
  return (
    <DIV className={`${className}`}>
         <div className="SingleProjectComponent-wrapper">
             <div className="close-btn">
                    <CloseIcon className='svg close-svg cursor-p'></CloseIcon>
             </div>
            <SingleProduct className='singlePageProdcut'></SingleProduct>
         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only SingleProjectComponent */
    margin-top: 50rem; 
    width: 70%;
    border-radius: 20px;  
    
    margin-left: auto;
    margin-right: auto;
    background: var(--color-white);
    border:3px solid var(--color-primary);

    max-height: 100vh;    
    &::-webkit-scrollbar {  // hide scrollbar
    width: 0 !important 
    }

    .SingleProjectComponent-wrapper{

        .close-btn{

            /* background: aqua; */
            text-align:right; 

            .svg{
                font-size: 35rem;
                /* background: ; */
                fill: red;   
                fill: var(--color-primary);   
                    margin-right: 15px;
                    margin-top: 7px;

            }
        }

        .singlePageProdcut{
            width: 95%;
            /* background: aqua;  */
            margin-left:auto;
            margin-right:auto; 
        }

    }
`;

export default SingleProjectComponent;
