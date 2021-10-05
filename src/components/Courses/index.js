import React from 'react';
import Icon1 from '../../images/python.svg';
import Icon2 from '../../images/sql.svg';
import Icon3 from '../../images/webdev.svg';
import {
  CoursesContainer,
  CoursesH1,
  CoursesWrapper,
  CoursesCard,
  CoursesIcon,
  CoursesH2,
  CoursesP
} from './CoursesElements';

const Courses = () => {
  return (
    <CoursesContainer id='courses'>
      <CoursesH1>Courses</CoursesH1>
      <CoursesWrapper>
        <CoursesCard>
          <CoursesIcon src={Icon1} />
          <CoursesH2>Python</CoursesH2>
          <CoursesP>
          Lorem ipsum dolor sit amet, elit. Sed pellentesque pretium nulla a vestibulum. 
          </CoursesP>
        </CoursesCard>
        <CoursesCard>
          <CoursesIcon src={Icon2} />
          <CoursesH2>SQL</CoursesH2>
          <CoursesP>
          Integer tincidunt mollis ante, id bibendum ipsum aliquam vitae.
          </CoursesP>
        </CoursesCard>
        <CoursesCard>
          <CoursesIcon src={Icon3} />
          <CoursesH2>Web Dev</CoursesH2>
          <CoursesP>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut.
          </CoursesP>
        </CoursesCard>
      </CoursesWrapper>
    </CoursesContainer>
  );
};

export default Courses;
