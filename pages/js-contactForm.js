import axios from 'axios';
import logo from '../public/logo.png';
import styles from '../styles/contactUs.module.css';
import Image from 'next/image';
import Link from 'next/link';
import Swal from 'sweetalert2';
import { useRouter } from 'next/router';

const baseUrl = 'http://localhost:3001/v1/management';

//TODO - axios error 400 when write a non email in email input

export default function ContactForm() {
    const router = useRouter()


    const handleSubmit = async (e) => {
        try {
            e.preventDefault()
            const body = {
                name: e.target.name.value,
                email: e.target.email.value,
                subject: e.target.subject.value,
                message: e.target.message.value
            }
            const emailSent = await axios.post(`${baseUrl}/contact`, body)
            if (emailSent) {
                await Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Your inquiry has been sent successfully',
                    showConfirmButton: false,
                    timer: 3000
                })
                router.push('/')
            }
            return true
        }
        catch (err) {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Your inquiry has not been sent',
                showConfirmButton: false,
                timer: 3000
            })
            if (err.response) {
                console.log(err.response.status)
            } else {
                console.log('Error', err.message)
            }
            return false
        }
    }

    return (
        <>
            <div className={styles.header}>
                <div>
                    <figure>
                        <Image src={logo} alt="logo" />
                    </figure>
                </div>
                <Link href="/">
                    <button>RETURN</button>
                </Link>
            </div>
            <div className={styles.container}>
                <h1 className={styles.contact}>Contact Us</h1>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Name"
                        required
                        minLength="5"
                        maxLength="50"
                    />
                    <input
                        type="text"
                        id="email"
                        name="email"
                        placeholder="Email"
                        required
                        title="email pattern should be email@email.com"
                    />
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        placeholder="Subject"
                        required
                        minLength={5}
                    />
                    <textarea
                        type="text"
                        id="message"
                        name="message"
                        rows="20"
                        placeholder="Message"
                        required
                        minLength={20}
                    />
                    <button type="submit">SEND</button>
                </form>
            </div>
        </>
    )
}