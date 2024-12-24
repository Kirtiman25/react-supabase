import React from 'react';

const about: React.FC = () => {
  return (
    <div className='p-4'>
      <h2 className='text-center font-extrabold text-sky-950 text-4xl p-4'>
        About Our College
      </h2>
      <p className='text-muted-foreground text-wrap text-base leading-8'>
        Welcome to <span className='font-bold'>Our College</span>, a leading institution dedicated to excellence 
        in education and holistic development. Established in 1990, our college has been 
        empowering students with quality education, fostering creativity, and nurturing 
        innovation. We offer diverse programs in arts, science, and technology, preparing 
        students to excel in a dynamic world.
      </p>
      <h3 className='text-teal-900 font-bold text-xl pt-4'>Our Vision</h3>
      <p className='text-muted-foreground text-wrap text-base leading-8'>
        Our vision is to become a center of excellence in higher education by fostering an 
        environment of intellectual curiosity and critical thinking. We aim to produce 
        socially responsible leaders who are equipped to address global challenges 
        and contribute to the betterment of society. Through cutting-edge research, 
        innovative pedagogy, and a commitment to lifelong learning, we strive to shape 
        the future of education.
      </p>
    </div>
  );
};

export default about;
