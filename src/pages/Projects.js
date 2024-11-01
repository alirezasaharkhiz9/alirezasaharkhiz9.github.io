import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

// import Cell from '../components/Projects/Cell';
// import data from '../data/projects';

const Projects = () => (
  <Main
    title="Projects"
    description="Learn about Alireza Saharkhiz's pub."
  >
    <article className="post" id="projects">
      <header>
        <div className="title">
          <h2><Link to="/projects">Projects</Link></h2>
        </div>
      </header>
      {/* {data.map((project) => (
        <Cell
          data={project}
          key={project.title}
        />
      ))} */}
      <p><a href="https://github.com/alirezasaharkhiz9/undergraduate-project-computer-vision"> Computer Vision Project</a></p>
      <p><a href="https://github.com/alirezasaharkhiz9/final-project-cs50p"> CS50P Final Project: Automated Machine</a></p>
    </article>
  </Main>
);

export default Projects;
