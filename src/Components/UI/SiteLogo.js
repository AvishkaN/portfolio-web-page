import styled from 'styled-components';



function SiteLogo({className=""}) {
  return (
    <DIV className={`${className} button`} >
         <div className="site-btn-wrapper">

            <div className="logo cursor-p">
                <p className="logo-text">
                    Avishka Nirmitha...
                </p>
            </div>

         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%; 
    
    .site-btn-wrapper{
        width: 100%;

        .logo{
                
                .logo-text,span{
                    font-family: augustina;      
                    text-transform: capitalize;
                    font-size: 24pt;
                    font-weight: bold;
                    margin-top: -17px;
                    transition:all .2s; 


                  

                }
            }

    }
`;

export default SiteLogo;
