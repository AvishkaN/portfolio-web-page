import styled from 'styled-components';



function Page({className=""}) {
  return (
    <DIV className={`${className}`}>
         <div className="about-me-wrapper">
                <p>
                I am Avishka. A web developer. I enjoy creating things on internet . web development started back in 2020 . I decided learn HTML,CSS ,Javascript, react js and node js . I  build some projects using that. (you can see it my project page) . I like learn more about web development. i am looking internship for frondend development  
                </p>
         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    
    .about-me-wrapper{


    }
`;

export default Page;
