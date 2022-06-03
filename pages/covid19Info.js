import styles from '../styles/covid19Info.module.css';
/* import ReturnButton from '../ReturnButton'; */
import logo from '../public/logo.png';
import Image from 'next/image'
import Link from 'next/link';


export default function CovidInfo() {
    return (
        <>
            <div className={styles.header}>
                <div className={styles.img}>
                    <figure className={styles.logo}>
                        <Image src={logo} alt="logo" />
                    </figure>
                </div>
                <div className={styles.button}>
                    <Link href="/">
                        <button>RETURN</button>
                    </Link>

                </div>
            </div>
            <div className={styles.container}>
                <h1>COVID-19. INFORMATION AND RECOMMENDATIONS</h1>
                <h3>ADVICES AND RECOMMENDATIONS WHEN VISITING OUR FACILITIES </h3>
                <article>
                    <p>
                        The hospital has drawn up protocols and implemented prevention measures to guarantee the health of patients and professionals. For this reason, it&apos;s very important that patients and companions follow the established advice and recommendations at all times in order to avoid possible infections.
                    </p>
                </article>
                <article>
                    <h2>HOSPITAL CENTER ACCESS</h2>
                    <ul>
                        <li>
                            <span>PATIENT:</span>You must provide an appointment flyer or SMS accrediting it. One companion per patient is allowed. Children can be accompanied by both parents.
                        </li>
                        <li>
                            <span>EMPLOYEES:</span> Must show identification card as a worker
                        </li>
                        <li>
                            <span>HOSPITALIZED PATIENT COMPANION:</span> Patient can be accompanied by a single person from 12 to 21 hours. Permanent accompaniment by a family member is only allowed in hospitalization units for children, high-risk pregnant women or in the process of giving birth, and dependent patients, at the discretion of the doctor or nurse in charge.
                        </li>
                    </ul>
                </article>
                <h3>MEASURES TO FOLLOW IN THE HOSPITAL</h3>
                <article>
                    <h4>RECOMMENDATIONS IN SITUATION OF LOW RISK OF CORONAVIRUS TRANSMISSION</h4>
                    <p>
                        Wash your hands frequently, and when entering and leaving the facilities.
                    </p>
                    <p>
                        keep the mask on properly at all times
                    </p>
                    <p>
                        Try to keep a safe distance
                    </p>
                    <p>
                        If you have respiratory symptoms or fever, notify your healthcare professional.
                    </p>
                </article>
            </div>
        </>
    )
}