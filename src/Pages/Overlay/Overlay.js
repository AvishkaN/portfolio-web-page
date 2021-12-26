import styled from 'styled-components';



function Overlay({className=""}) {
  return (
    <DIV className={`${className}`}>
         <div className="overlay-wrapper">
                dfg
         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    background: #000000b0;
    height: 100%;
    position: absolute; 
    top: 0;
    left: 0; 
    z-index: 500;
    
    .overlay-wrapper{

    }
`;

export default Overlay;
