import styled from 'styled-components';
import ModeNightOutlinedIcon from '@mui/icons-material/ModeNightOutlined';
import {useDispatch} from 'react-redux'; 
import { selectClicks } from './../../Redux/slices/clickSlice';
import {useSelector } from 'react-redux';


import Brightness2Icon from '@mui/icons-material/Brightness2';


import { TurnOnOFFNigtModeFN } from './../../Redux/slices/clickSlice';



function NIghtMode({className=""}) {
    const dispatch=useDispatch();
    const userClick=useSelector(selectClicks);




    const handleClick=()=>{
        dispatch(TurnOnOFFNigtModeFN());
    };

  return (
    <DIV className={`${className}`} onClick={handleClick}>
         <div className="NIghtMode-wrapper cursor-p" >
               {!userClick.nightMode && <ModeNightOutlinedIcon className='night-mode-icon'></ModeNightOutlinedIcon>}
                {userClick.nightMode && <Brightness2Icon className='night-mode-icon'></Brightness2Icon>}
         </div>
    </DIV>
  );
}


const DIV=styled.div`

`;

export default NIghtMode;
