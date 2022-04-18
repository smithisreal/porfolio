import React, { useEffect, useRef } from 'react';
import Blog from '../../personal_profile/page/personal_profile'
import About from '../../about_me/page/about'
import Skill from '../../skill/page/skill'
import Box from '@mui/material/Box';
import Eduction from '../../education/page/education';
import Experiance from '../../experaince/page/experiance';
import Project  from '../../project/page/project';
import Contact  from '../../contact/page/contact';
function home() {

  return (
    <Box  className='xl:p-28 lg:p-12 md:p-8 sm:p-4 bg-main'>
       <Blog />
       <About />
       <Skill />
       {/* <Eduction /> */}
       <Experiance />
       <Project />
       <Contact />
    </Box>
  );
}

export default home;

