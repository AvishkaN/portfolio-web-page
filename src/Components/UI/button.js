import styled from 'styled-components';


function Singlecomponent({className="",text="this is button"}) {
  return (
    <DIV className={`${className} button`} >
         <div className="btn-wrapper">
               
                <button  className='button'>{text}</button>
         </div>
    </DIV>
  );
}


const DIV=styled.div`
    /* background-color: green; */
    width: 100%; 
    
    .btn-wrapper{
        width: 100%;
        button{
            width: 100%;
            border: 2px solid var(--color-primary);
            padding: 8px 8px; 
            text-transform: uppercase;
            color: var(--color-secondary);
            font-weight: bold;
            transition: .1s  all ;

            &:hover{
                background-color: var(--color-primary);
                color: var(--color-white);
            }
       

        }
    }
`;

export default Singlecomponent;
