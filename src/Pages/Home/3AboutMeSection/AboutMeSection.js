import styled from 'styled-components';
import AboutBottom from '../3AboutMeSection/AboutBottom';

import Section from '../Section';



function SkillSection({className=""}) {
  return (
    <DIV className={`${className}`}>
        <Section className="" text="about me">  <AboutBottom/>  </Section>
        {/* <SkillBottom/> */}
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    margin-top: var(--margin-section-t);

`;

export default SkillSection;
