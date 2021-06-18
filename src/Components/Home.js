import React from 'react';
import styles from '../Styling/Home.module.css';

function Home({aboutLink, projectLink}) {
  return(
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.logo}>FRANK FOO_</h1>
        <ul className={styles.navBar}>
          <li>
            <a onClick={()=>{aboutLink.current.scrollIntoView()}}>ABOUT</a>
          </li>
          <li>
            <a onClick={()=>{projectLink.current.scrollIntoView()}}>PROJECTS</a>
          </li>
          </ul>
      </div>
      <div className={styles.body}>
        <div className={styles.bodyText}>
          <p>Hi, I'm <p className={styles.name}>Frank</p></p>
          <p>A front end enthusiast from Sydney, Aus</p>
          <p>Computer Science UNSW Alumni</p>
          <p>Welcome to my website!</p>
        </div>
        <ul className={styles.links}>
          <li>
            <a href="https://github.com/frankfoo" target="_blank">Github</a>
          </li>
          <li className={styles.dash}>
            <a>-</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/frank-foo-b22963199/" target="_blank">LinkedIn</a>
          </li>
          <li className={styles.dash}>
            <a>-</a>
          </li>
          <li>
            <p>frankfoo37@gmail.com</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Home;