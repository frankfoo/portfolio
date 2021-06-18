import React, { useRef } from 'react';
import styles from './Styling/App.module.css';
import Home from './Components/Home.js';
import About from './Components/About.js';
import Projects from './Components/Projects.js';

function App() {
  const aboutRef = React.createRef();
  const projectRef = React.createRef();
  return (
    <main className={styles.container}>
      <Home aboutLink={aboutRef} projectLink={projectRef}/>
      <About aboutLink={aboutRef} />
      <Projects projectLink={projectRef}/>
    </main>
  );
}

export default App;
