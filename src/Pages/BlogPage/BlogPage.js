import styled from 'styled-components';



function BlogPage({className=""}) {
  return (
    <DIV className={`${className}`}>
         <div className="BlogPage-wrapper">
                <p>
                    coming soon...
                </p>
         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    margin-top: var(--margin-top-fix-nav);   /*only Blogpage */
    
    .BlogPage-wrapper{
        min-height: 100vh;
        /* background-color: orange;  */
        display: flex;
        align-items: center; 
        justify-content: center;    
        
        p{
            font-size: 25rem;  
            color:var(--color-black); 
        }
    }
`;

export default BlogPage;
