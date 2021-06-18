import React from 'react';
import styles from '../Styling/About.module.css';
import reactLogo from '../Images/react.svg';
import jsLogo from '../Images/js.svg';
import pythonLogo from '../Images/python.svg';
import cssLogo from '../Images/css.svg';
import htmlLogo from '../Images/html.svg';
import linuxLogo from '../Images/linux.svg';
import gitLogo from '../Images/git.svg';
import vscLogo from '../Images/vsc.svg';

function About({aboutLink}) {
  return(
    <div ref={aboutLink} className={styles.container}>
      <div className={styles.box1}>
        <h2 className={styles.title}>About</h2>
        <p>Hi I'm Frank, a recent graduate from UNSW with a bachelors in Computer Science with an interest in front end development as well as cyber security.</p>
        <p>I'm looking to make my start in the software/IT industry, and am able to work diligently and to learn about new technologies.</p>
        <p>I'm also looking for training, mentorship and guidance.</p>
        
      </div>
      <div className={styles.box2}>
        <h2 className={styles.title}>Interests & Hobbies</h2>
        <p>I play casual basketball on the weekend with friends, although I'm not very good!</p>
        <p>I love films, especially science fiction/thriller films. My top 3 would be: Prestige, Arrival, Blade Runner 2049</p>
        <p>I follow anything tech related e.g. latest laptops/phones/gpus being released</p>
      </div>
      <div className={styles.box3}>
        <h2 className={styles.skillsTitle}>Skills / Tools</h2>
        <div className={styles.logosContainer}>
          <div className={styles.skillBox}>
            <img className={styles.logo} src={pythonLogo} />
            <p>PYTHON</p>
          </div>
          <div className={styles.skillBox}>
            <img className={styles.logo} src={reactLogo} />
            <p>REACT</p>
          </div>
          <div className={styles.skillBox}>
            <img className={styles.logo} src={jsLogo} />
            <p>JAVASCRIPT</p>
          </div>
          <div className={styles.skillBox}>
            <img className={styles.logo} src={htmlLogo} />
            <p>HTML</p>
          </div>
          <div className={styles.skillBox}>
            <img className={styles.logo} src={cssLogo} />
            <p>CSS</p>
          </div>
          <div className={styles.skillBox}>
            <img className={styles.logo} src={linuxLogo} />
            <p>LINUX</p>
          </div>
          <div className={styles.skillBox}>
            <img className={styles.logo} src={gitLogo} />
            <p>GIT</p>
          </div>
          <div className={styles.skillBox}>
            <img className={styles.logo} src={vscLogo} />
            <p>VSCODE</p>
          </div>
        </div>
      </div>
      <div className={styles.box4}>
        <h2 className={styles.title}>Relevant Courses</h2>
        <p>COMP2041 Software Tools</p>
        <p>COMP3311 Database Systems</p>
        <p>COMP3331 Computer Networks & Applications</p>
        <p>COMP6080 Web Front-end Programming</p>
        <p>COMP6841 Extended Security Engineering and Cyber Security</p>
      </div>
    </div>
  );
}

export default About;