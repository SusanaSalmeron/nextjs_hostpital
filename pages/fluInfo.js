import styles from '../styles/fluInfo.module.css';
import logo from '../public/logo.png';
import Image from 'next/image';
import Link from 'next/link';



export default function FluInfo() {
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
                <h1>INFLUENZA</h1>
                <article>
                    <p>
                        Influenza is a very contagious disease that attacks your respiratory system and normally resolves on its own, but sometimes can be deadly.
                        It occurs in epidemic waves, generally in the winter months.
                        Though the annual influenza vaccine isn`&apos`t 100% effective, it`&apos`s still your best defense against the flu.

                    </p>
                </article>
                <article>
                    <h3>SYMPTOMS</h3>
                    <ul>
                        <li>
                            Fever
                        </li>
                        <li>
                            Aching muscles
                        </li>
                        <li>
                            Chills and sweats
                        </li>
                        <li>
                            Headache
                        </li>
                        <li>
                            Dry, persistent cough
                        </li>
                        <li>
                            Shortness of breath
                        </li>
                        <li>
                            Tiredness and weakness
                        </li>
                        <li>
                            Runny or stuffy nose
                        </li>
                        <li>
                            Sore throat
                        </li>
                        <li>
                            Eye pain
                        </li>
                        <li>
                            Vomiting and diarrhea, but this is more common in children than adults
                        </li>
                    </ul>
                </article>
                <article>
                    <h3>
                        VACCINATION CAMPAIGN
                    </h3>
                    <p>
                        The objective of the campaign is to reduce mortality and morbidity associated with influenza and the impact of the disease in the community. For this reason, it is fundamentally aimed at protecting people who have a higher risk of presenting complications in case of suffering from the flu due to age or other conditions and those who can transmit the disease to others who have a high risk of complications.
                    </p>
                    <div>
                        <h4>People at higher risk of developing flu complications</h4>
                        <ul>
                            <li>
                                Young children under age 5, and especially those under 6 months
                            </li>
                            <li>
                                Adults older than age 65
                            </li>
                            <li>
                                Pregnant women and women up to two weeks after giving birth
                            </li>
                            <li>
                                People with weakened immune systems
                            </li>
                            <li>
                                People who have chronic illnesses
                            </li>
                        </ul>
                    </div>
                </article>
                <article>
                    <div>
                        <h4>When to see a doctor</h4>
                        <ul>
                            <li>
                                Difficulty breathing or shortness of breath
                            </li>
                            <li>
                                Chest pain
                            </li>
                            <li>
                                Ongoing dizziness
                            </li>
                            <li>
                                Seizures
                            </li>
                            <li>
                                Worsening of existing medical conditions
                            </li>
                            <li>
                                Severe weakness or muscle pain
                            </li>
                        </ul>
                    </div>
                </article>
            </div>
        </>
    )
}