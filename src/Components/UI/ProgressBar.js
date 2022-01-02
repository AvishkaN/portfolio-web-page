import styled from 'styled-components';



function Progress({className="",ProgressPercentage=50}) {
  return (
    <DIV className={`${className}`} ProgressPercentage={ProgressPercentage}>
         <div className="Progress-wrapper">
                <div className="progress-bar">	&nbsp;</div>
         </div>
         <p className='complete-stats'> {ProgressPercentage}% complete</p>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* background: red; */
    
    /* margin-top: var(--margin-top-fix-nav);  */  /*only Progress */
    
    .Progress-wrapper{
        width: 100%;
        height: 20%;
        /* background: orange;   */
        border: 1px solid var(--color-primary);
        border-radius: 20px;
        
        
        .progress-bar{
            background: var(--color-primary); 
            border-radius: 20px;

            width: ${props => (props.ProgressPercentage)}%;
            height: 100%;
            /* transition: all .2s;  */
            animation-name: animationProgress;
            animation-duration: 2s;

            
        }
        
        @keyframes animationProgress{
            0% {
                width: 0%;
            }
            100% {
                width: ${props => (props.ProgressPercentage)}%;
            }
        }

    }

    .complete-stats{
        text-align:right; 
        font-size:16rem; 
        color: var(--color-primary); 
    }
`;

export default Progress;
