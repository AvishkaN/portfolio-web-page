import styled from 'styled-components';



function SingleProductSection({className="",title,list=[]}) {
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
`;

export default SingleProductSection;
