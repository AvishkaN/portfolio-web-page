import styled from 'styled-components';



function ProjectView({className="",iframeLink="https://goofy-curie-a15ec3.netlify.app/"}) {
  return (
    <DIV className={`${className}`}>
         <div className="ProjectView-wrapper">
                <div className="project-view__title">Project View</div>

                <a href={iframeLink} target="_blank" >

                <div className="project-view__iframe cursor-p">
                    <iframe src={iframeLink} name="iframe_a"  title="Iframe Example"></iframe>
                    <div className="iframe-background"><p> open project new tab</p></div>
                </div>
                </a>
         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    margin-top: 40rem;    
    margin-bottom: 60rem;    
    /* margin-top: var(--margin-top-fix-nav);  */  /*only ProjectView */
    
    .ProjectView-wrapper{
        width: var( --single-project-section-width);
        margin-left: auto;
        margin-right: auto;

        .project-view{
            &__title{
                font-size: 20rem;
                font-weight: bold;
                color: var(--color-secondary);  
                margin-bottom: 20rem;    
            }
            &__iframe{

                
                border-radius: 20px; 
                /* background: aqua;  */
                /* background: red;  */
                height: 400rem; 
                overflow-y: hidden; 
                position: relative;
                
                iframe{
                    border-radius: 20px; 
                    overflow-y: hidden; 
                    border:var(--iframe-border);


                    width: 100%; 
                    height: 100%;
                }

                &:hover .iframe-background p{
                    display: flex;
                }

                .iframe-background{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    /* background: rgba(0,0,0,0.4); */  
                    background: #27ae606b;  

                    p{
                        font-size: 23rem;
                        color: var(--color-white);
                        /* font-weight: bold; */
                        display: none;
                        transition: all .2s; 
                    }
                }
            }
        }

    }
`;

export default ProjectView;
