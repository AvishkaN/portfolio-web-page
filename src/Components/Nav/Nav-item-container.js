import styled from 'styled-components';
import {Link,NavLink} from "react-router-dom";

function NavItemContainer({className=""}) {
  return (
    <DIV className={`${className}`}>
             <nav>
                    <li> <NavLink activeClassName="active"  to="/">Home</NavLink ></li>
                    <li><NavLink  to="/about">About Me</NavLink ></li>
                    <li><NavLink  to="/blog">Blog</NavLink ></li>
                    <li><NavLink  to="/projects">Projects</NavLink ></li>
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
            a{

              color: inherit;
              text-decoration: none;
            }

            .active{
              color: var(--color-primary); 
              /* color: red;   */
            }

        }
    }
`;

export default NavItemContainer;
