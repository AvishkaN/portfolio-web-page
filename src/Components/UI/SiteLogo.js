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

                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                        background-image: linear-gradient(
                            to left,
                            var(--color-black), 
                            var(--color-black) 50%,
                            var(--color-primary) 50%
                        );
                        background-size: 200% 100%;
                        background-position: -100%;
                        transition: all 0.3s ease-in-out;

                        &:hover {
                            background-position: 0%;
                        
                        }

                }
            }

    }
`;

export default SiteLogo;
