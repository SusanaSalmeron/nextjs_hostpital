import Link from 'next/link';
import styles from './Covid19Banner.module.css';


export default function Covid19() {
    return (
        <>
            <div className={styles.covid}>
                <article>
                    <p>Our professionals are working for everyone&apos;s health. Follow the recommendations of the experts:
                        Always wear a mask, perform hand hygiene frequently and keep a safe distance whenever possible
                    </p>
                    <Link href="/covid19Info">
                        <button
                            label={"MORE INFO"}
                            name="covid19"
                        >Go to info</button>
                    </Link>
                </article>
            </div>
        </>
    )

}