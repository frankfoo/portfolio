import React from 'react';
import styles from '../Styling/Projects.module.css';
import ProjectCard from './ProjectCard';

function Projects({projectLink}) {
  const portDesc = "A website portfolio written in React/Javascript with CSS modules, showcasing projects, about, interests and skills. Hosted on github pages. You're on it now!";
  const portLink = "https://github.com/frankfoo/portfolio";
  const ozDesc = "A simple script written in javascript that takes in a list of items a user wants, and constantly polls the latest ozbargain posts looking for these items. If an item is found, an email is sent notifying the user. Originally this was intended for a raspberry pi zero so it could run non stop."
  const ozLink = "https://github.com/frankfoo/ozbargain-tracker"
  const cipherDesc = "A substitution cipher game written in React/Javascript, styled with Material-UI."
  const cipherLink = "https://github.com/frankfoo/cipher-game"
  return(
    <div ref={projectLink} className={styles.container}>
      <h2 className={styles.title}>Projects_</h2>
      <div className={styles.gridBox}>
        <ProjectCard title="Portfolio Website" desc={portDesc} link={portLink}/>
        <ProjectCard title="Ozbargain Tracker" desc={ozDesc} link={ozLink}/>
        <ProjectCard title="Cipher Game" desc={cipherDesc} link={cipherLink} playLink={'https://www.frankfoo.github.io/cipher-game'}/>
        <ProjectCard title="More to come"></ProjectCard>
      </div>
    </div>
  );
}

export default Projects;