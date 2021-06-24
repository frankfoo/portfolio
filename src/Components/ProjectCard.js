import React, { useEffect, useState } from 'react';
import styles from '../Styling/ProjectCard.module.css';

function ProjectCard({title, desc, link, playLink}) {
  const [clicked, setClicked] = useState(false);
  let mainTitle = "[ " + title + " ]";
  return(
    <div className={styles.container}>
      {!clicked && 
        <div className={styles.titleCard} onClick={() => {link && setClicked(!clicked)}}> 
          <p>{mainTitle}</p>
        </div>
      }
      {clicked &&
        <div className={styles.infoBox}>
          <p className={styles.infoBoxTitle}>{title}</p>
          <p className={styles.infoBoxDesc}>{desc}</p>
          {playLink && 
            <a className={styles.infoBoxLink} href={playLink} target="_blank">Play Now</a>
          }
          {link && 
            <a className={styles.infoBoxLink} href={link} target="_blank">Github Repo</a>
          }
        </div>
      }
    </div>
  );
}

export default ProjectCard;