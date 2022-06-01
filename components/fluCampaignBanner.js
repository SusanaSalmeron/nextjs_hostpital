import styles from './fluCampaignBanner.module.css';
import Link from 'next/link';


export default function FluCampaignBanner() {
    return (
        <>
            <div className={styles.flu}>
                <article>
                    <p>
                        Influenza vaccination campaign
                    </p>
                    <Link href="/fluInfo">
                        <button
                            label={"MORE INFO"}
                            name="flu"
                            className={styles.button}
                        >Go to campaing</button>
                    </Link>
                </article>
            </div>
        </>
    )

}