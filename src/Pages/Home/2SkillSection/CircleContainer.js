import styled from 'styled-components';
import ProgramingLanCircle from "./ProgramingLanCircle";
import HtmlLogo from "../../../assets/svg/htmlLogo.svg";
import CssLogo from "../../../assets/logo/cssLogo.png";
import JsLogo from "../../../assets/svg/javascript.svg";
import reactLogo from "../../../assets/svg/reactLogo.svg";
// import nodeJsLogo from "./../../assets/svg/nodeJsLogo.svg";
import nodeJsLogo from "../../../assets/svg/nodeJsLogo.svg";
// import CssLogo from "./../../assets/svg/css.svg";



function CircleCointainer({className=""}) {
  return (
    <DIV className={`${className}`}>
         <div className="circle-container-wrapper">
                <ProgramingLanCircle  svg={HtmlLogo}/>
                <ProgramingLanCircle  svg={CssLogo}/>
                <ProgramingLanCircle  svg={JsLogo}/>
                <ProgramingLanCircle  svg={reactLogo}/>
                <ProgramingLanCircle  svg={nodeJsLogo}/>
         </div>
    </DIV>
  );
}




const DIV=styled.div`
    width: 100%;
    /* background-color: green; */
    
    .circle-container-wrapper{
        display: flex;
    }
`;

export default CircleCointainer;
