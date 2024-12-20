import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

// import Education from '../components/Resume/Education';
// import Experience from '../components/Resume/Experience';
import Skills from '../components/Resume/Skills';
// import Courses from '../components/Resume/Courses';
// import References from '../components/Resume/References';

// import courses from '../data/resume/courses';
// import degrees from '../data/resume/degrees';
// import work from '../data/resume/work';
import { skills, categories } from '../data/resume/skills';

// NOTE: sections are displayed in order defined.
const sections = {
  // Education: () => <Education data={degrees} />,
  // Experience: () => <Experience data={work} />,
  Skills: () => <Skills skills={skills} categories={categories} />,
  // Courses: () => <Courses data={courses} />,
  // References: () => <References />,
};

// const { PUBLIC_URL } = process.env;

const Resume = () => (
  <Main
    title="Resume"
    description="Alireza Saharkhiz's CV"
  >
    <article className="post" id="resume">
      <header>
        <div className="title">
          <h2><Link to="resume">Resume</Link></h2>
          <div className="link-container">
            {Object.keys(sections).map((sec) => (
              <h4 key={sec}>
                <a href={`#${sec.toLowerCase()}`}>{sec}</a>
              </h4>))}
          </div>
        </div>
      </header>
      <p>
        View my{' '}
        <a
          href="https://drive.google.com/file/d/1oePsJQ9a5kjNLXPpXwcEChKl6bP4b9oG/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
        >
          CV
        </a>
        .
      </p>
      {Object.entries(sections).map(([name, Section]) => (
        <Section key={name} />
      ))}
    </article>
  </Main>
);

export default Resume;
