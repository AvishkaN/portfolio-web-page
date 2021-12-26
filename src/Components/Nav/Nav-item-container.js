import styled from 'styled-components';

function NavItemContainer({className=""}) {
  return (
    <DIV className={`${className}`}>
             <nav>
                    <li>Home</li>
                    <li>About Me</li>
                    <li>Blog</li>
                    <li>Projects</li>
            </nav>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    
    nav{
        display: flex;

        li{
            list-style: none;
            cursor: pointer;

        }
    }
`;

export default NavItemContainer;
