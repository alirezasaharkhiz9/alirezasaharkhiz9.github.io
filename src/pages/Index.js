import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Alireza Saharkhiz's personal website. Statistics student."}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2><Link to="/">About this site</Link></h2>
          <p>
            Academic and Personal website of Alireza Saharkhiz.
          </p>
        </div>
      </header>
      <p> Welcome to my website. Please feel free to read more <Link to="/about">about me</Link>,
        check out my {' '}
        <Link to="/resume">resume</Link> {' '}
        and <Link to="/projects">projects</Link>, {' '}
        or <Link to="/contact">contact me</Link>.
      </p>
      <p> </p>
    </article>
  </Main>
);

export default Index;
