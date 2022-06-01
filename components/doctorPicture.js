import styles from './doctorPicture.module.css';
import Image from 'next/image';


export default function DoctorPicture({ data }) {
    return (
        <>
            <div className={styles.doctor}>
                <Image className={styles.img} src={data.photo} width='150px' height='200px' alt="photo_doctor" />
                <h3 className={styles.name}>{data.name}  <span className={styles.speciality}>{data.speciality}</span></h3>
            </div>
        </>
    )
}