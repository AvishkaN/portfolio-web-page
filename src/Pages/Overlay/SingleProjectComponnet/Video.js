import styled from 'styled-components';



function Video({className="",src}) {
  return (
    <DIV className={`${className}`}>
         <div className="Video-wrapper">
             <div className="iframe">
                <iframe src={src} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allow="fullscreen;"></iframe>
             </div>

         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    
    .Video-wrapper{
            .iframe{
                    border-radius: 20px; 
                    height: 400rem; 
                    overflow-y: hidden; 

                    iframe{
                        border-radius: 20px; 
                        overflow-y: hidden; 
                        border:var(--iframe-border);


                        width: 100%; 
                        height: 100%;
                    }
                }
    }
`;

export default Video;
