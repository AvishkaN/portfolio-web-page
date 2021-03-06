import styled from 'styled-components';
import Button from '../../../Components/UI/button';
import GithubLogo from '../../../assets/svg/social-media/github.svg';




function SourceFileSection({className="",sourceFileLink}) {
  return (
    <DIV className={`${className}`}>
         <div className="SourceFileSection-wrapper">
                <img className='github-logo' src={GithubLogo} alt="" />
                <a href={sourceFileLink}>
                  
                  <Button text={"Open github repo"} ></Button>
                </a>
         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only SourceFileSection */
    
    .SourceFileSection-wrapper{
        display: flex;

        .github-logo{
            width: 50rem; 
            margin-right: 10px; 
        }

    }
`;

export default SourceFileSection;
