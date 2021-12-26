import styled from 'styled-components';
import ProjectBottom from '../4ProjectSection/ProjectBottom';

import Section from '../Section';



function SkillSection({className=""}) {
  return (
    <DIV className={`${className}`}>
        <Section className="" text="projects...">  <ProjectBottom/>  </Section>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    margin-top: var(--margin-section-t);

`;

export default SkillSection;
