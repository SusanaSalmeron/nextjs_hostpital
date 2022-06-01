import Image from 'next/image';
import logo from '../public/logo.png';
import picture1 from '../public/picture1.jpg'
import picture2 from '../public/picture2.jpg'
import picture3 from '../public/picture3.jpg'
import picture4 from '../public/picture4.jpg'
import picture5 from '../public/picture5.jpg'
import styles from '../styles/Home.module.css';
import Covid19Banner from '../components/covid19Banner';
import FluCampaignBanner from '../components/fluCampaignBanner';
import DoctorPictureList from '../components/doctorPictureList';



export default function Home() {
  return (
    <div className={styles.all} id="home">
      <div className={styles.container}>
        <div className={styles.img}>
          <figure className={styles.logo}>
            <Image src={logo} alt="logo" />
          </figure>
        </div>
        {/* <div className={styles.button}>
          {
            checkValidToken() ? <LogoutButton
              setLoggedIn={setLoggedIn}
            /> :
              <NavigateButton
                route={'/login'}
                label="LOGIN"
                name={'login'}
              />
          }
          {button()}
        </div> */}
      </div>
      <div className={styles.gallery}>
        <figure className={styles.picture1}>
          <Image src={picture1} alt="picture1" />
        </figure>
        <figure className={styles.picture2}>
          <Image src={picture2} alt="picture2" />
        </figure>
        <figure className={styles.picture3}>
          <Image src={picture3} alt="picture3" />
        </figure>
        <figure className={styles.picture4}>
          <Image src={picture4} alt="picture4" />
        </figure>
        <figure className={styles.picture5}>
          <Image src={picture5} alt="picture5" />
        </figure>
      </div>
      <div className={styles.covid}>
        <Covid19Banner />
        <FluCampaignBanner />
      </div>

      <div className={styles.hospital}>
        <h2 className={styles.subtitle}>
          OUR MEDICAL TEAM
        </h2>
      </div>
      <DoctorPictureList />
    </div>
  )
}
