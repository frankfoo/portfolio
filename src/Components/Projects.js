import React from 'react';
import styles from '../Styling/Projects.module.css';

function Projects({projectLink}) {
  return(
    <div ref={projectLink} className={styles.container}>
      <p>PROJECTS PAGE</p>
    </div>
  );
}

export default Projects;