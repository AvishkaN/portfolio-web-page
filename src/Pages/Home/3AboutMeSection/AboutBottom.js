import styled from 'styled-components';



function Page({className=""}) {
  return (
    <DIV className={`${className}`}>
         <div className="about-me-wrapper">
                <p>

                  I am Avishka. A web developer. I enjoy creating things on internet . 
                  web development started back in 2020 . I decided learn

{/* 
                   HTML,CSS ,Javascript, 
                  react js and node js .  */}

                  <span className='high-light-text'> HTML</span> ,
                  <span className='high-light-text'>CSS</span> ,
                  <span className='high-light-text'> Javascript</span>, 
                  <span className='high-light-text'> react js</span> and   
                  <span className='high-light-text'> node js </span>
                  
                  
                  I build some projects using that. 
                  (you can see it my project page) . I
                  self study and with my hard work to satisfy my internship at your 
                  company and also willing to learn more from this internship. 
                  I like learn more about web development.I am looking internship for frondend development               
                </p>
         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    
    .about-me-wrapper{

      p{
        color:var(--color-black);

      }


    }
`;

export default Page;
