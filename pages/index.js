import {useState, useEffect} from 'react'
import Startup from '../Components/Startups/Startup'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import featured from '../public/featuredStartups'
import upcoming from '../public/upcomingStartups'

export default function Home() {
  //create state
  const [featuredStartups, setFeaturedStartups] = useState(featured);
  const [upcomingStartups, setUpcomingStartups] = useState(upcoming);

  return(
    <section>
      <div className={styles.filler}></div>
      <div className={styles.banner}>
        <img src="./banner.png" alt="banner"/>
      </div>
      <h2 className={styles.subTitle}>featured startups</h2>
      <div className={styles.startups + ' row'}>
        {featuredStartups.map((item) => (
          <Startup key={item.projectName} startup={item} />
        ))}
      </div>
      <h2 className={styles.subTitle}>upcoming startups</h2>
      <div className={styles.startups + ' row'}>
      {upcomingStartups.map((item) => (
          <Startup key={item.projectName} startup={item} />
        ))}
      </div>
    </section>
  )
}
