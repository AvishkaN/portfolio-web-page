import styled from 'styled-components';
import SingleProjectSection from './SingleProjectSection';
import ProjectView from './ProjectView';



function singleProduct({className=""}) {
  return (
    <DIV className={`${className}`}>
         <div className="singleProduct-wrapper">
                <p className="p-single-product__title">E commerce Project (building 🏗)</p>
                <p className="p-single-product__desciption">I decide simple build e commerce  web app  </p>
                <SingleProjectSection className='SingleProductSection' title={"What technologies I use for this ?"} list={["React js","styled component","react redux","pwa","firebase firestore","firebase storage","firebase auth "]}></SingleProjectSection>
                <SingleProjectSection className='SingleProductSection' title={"What features this project have ? "} list={["sign in / sign up / log out","log in with google","log in with twitter","cart add/ remove","wishlistg add/remove","file uploading ","buy product ","responsive design","product add"]}></SingleProjectSection>
                <SingleProjectSection className='SingleProductSection' title={"Project "} list={["sign in / sign up / log out","log in with google","log in with twitter","cart add/ remove","wishlistg add/remove","file uploading ","buy product ","responsive design","product add"]}></SingleProjectSection>
                <ProjectView></ProjectView>
         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* position: relative; */
  
    /* overflow: auto; */
    /* margin-top: var(--margin-top-fix-nav);  */  /*only singleProduct */
    
    .singleProduct-wrapper{

        .p-single-product{
                &__title{
                    text-transform: uppercase;
                    font-size: 25rem;   
                    font-weight: bold;
                    color: var(--color-primary);
                    text-align: left;   
                }
                &__desciption{   
                    margin-top: var(--single-project-section-margin-top);
                    font-family: Alata;
                    font-size: var(--Alata-font);


                }
        }

        .SingleProductSection{
            /* background: red;  */
            width: var( --single-project-section-width);
            margin-left: auto;
            margin-right: auto;
            /* margin-top: 10rem;  */
            /* margin-top: var(--single-project-section-margin-top); */
            margin-top: 40rem;   

        }

    }
`;

export default singleProduct;
