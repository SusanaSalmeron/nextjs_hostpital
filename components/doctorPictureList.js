import { useEffect, useState } from 'react';
import { getDoctorsForOptions } from '../services/catalogService';
import DoctorPicture from './DoctorPicture';
import style from './doctorPictureList.module.css'

export default function DoctorPictureList() {
    const [doctors, setDoctors] = useState([])

    useEffect(() => {
        getDoctorsForOptions()
            .then(response => {
                console.log(response)
                setDoctors(response)
            })
    }, [])

    return (
        <div className={style.team}>
            {doctors.map((doctor, i) => {
                return <DoctorPicture
                    data={doctor}
                    key={i}
                    id={doctor.id}
                />
            })}
        </div>
    )
}