import styled from 'styled-components';
import Video from './Video';
import SourceFile from './SourceFile';



function SingleProductSection({className="",title,list=[],paragraph=false,video=false,sourcefile=false}) {
  return (
    <DIV className={`${className}`}>
         <div className="single-product-section-wrapper">
                <p className="single-product-section__title">{title}</p>
                <div className="single-product-section__list">


                     <ul>
                            {
                                list.map(li=>(

                                    <li>{li}</li>
                                ))
                            }
                        </ul>

                </div>

                    {/* PARAGRAPH */}
                     { paragraph && ( <p className='paragraph'>
                         {paragraph}
                        </p>)
                    }

                {/* DEMO VIDEO */}
                {video && (
                   <Video src="https://www.youtube.com/embed/6LvQyQvaVZs"></Video>
                    )
                } 

                {/* SOURCEFILE VIDEO */}
                {sourcefile && (
                        <SourceFile className='souce-file'></SourceFile>
                    )
                } 
                       
         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only singleProductsection */
    
    .single-product-section{

        &__title{
            font-size: 20rem;
            font-weight: bold;
            /* background: red;  */
            color: var(--color-secondary);  
            margin-bottom: 20rem;    



        }
        &__list{

            ul{  
                display: flex;
                flex-wrap:wrap; 
                li{
                    width: 50%; 
                    font-family: Alata;
                    font-size: var(--Alata-font);
                    color:var(--color-black);


                    &::before{

                        display: inline-block;
                        content: '';
                        border-radius: 50%;
                        height:9rem;
                        width:9rem;
                        margin-bottom: 2px;     
                        margin-right:3px;     
                        background-color: var(--color-black);
                    }

                }
            }

        }

        
    }
    .paragraph{
        font-family: Alata;
        font-size: var(--Alata-font);
        color:var(--color-black);

    }

    .souce-file{
        width: 50%; 

        @media(max-width:987px){
            width: 99%; 
        }
    }


`;

export default SingleProductSection;
