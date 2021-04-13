import React from 'react'
import styles from '../../styles/Startup.module.css'

function Startup({ startup }) {
    return (
        <div className={styles.borderRadient}>
              <div className={styles.card + ' col'}>
                <div className={styles.imgContainer}>
                   <img className={styles.img} src={startup.projectLogo} alt="logo"/> 
                </div>
                <p className={styles.pSmall}>{startup.projectDescription !== '' ? startup.projectDescription : " "}</p>
                <div className={styles.buttonContainer + ' row'}>
                    <button id={styles.rt}>give</button>
                    <button id={styles.lt}>learn</button>
                </div>
                <p>${startup.currentFunding}/${startup.fundingGoal}</p>
                <img className={styles.img} src="./progressbar.png" alt="progress bar"/>
                <p className={styles.pSmall}>83% Funded</p>
            </div>
        </div>
    )
}

export default Startup
