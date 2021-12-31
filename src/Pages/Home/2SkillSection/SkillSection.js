import styled from 'styled-components';
import SkillBottom from '../2SkillSection/Skill-bottom';
import Section from '../Section';



function SkillSection({className=""}) {
  return (
    <DIV className={`${className}`}>
        <Section className="" text={"skills"}>  <SkillBottom/>  </Section>

    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: 100rem;  */
    margin-top: 170rem;

`;

export default SkillSection;
