import styles from './footer.module.css';
import Link from 'next/link';
import logo from '../public/logoFooter.png';
import Image from 'next/image';



export default function Footer() {
    return (
        <div className={styles.container}>
            <div className={styles.menu}>
                <div className={styles.logo}>
                    <Link href={"/home"}>
                        <Image src={logo} alt="logo" />
                    </Link>
                </div>
                <ul className={styles.ul}>
                    <li>
                        <Link href={"/legalNotice"}>
                            Legal Notice
                        </Link>
                    </li>
                    <li>
                        <Link href={"/privacyPolicy"}>
                            Privacy Policy
                        </Link>
                    </li>
                    <li>
                        <Link href={"/js-contactForm/"} className={styles.contact}>
                            Contact Us
                        </Link>
                    </li>
                </ul>
            </div>
            <div className={styles.copyright}>
                <p>2021 ©HopeHospital - All rights reserved </p>
            </div>
        </div>
    )

}