import { useForm } from 'react-hook-form';
import styles from '../styles/loginForm.module.css';
import Link from 'next/link'
import axios from 'axios';
import Swal from 'sweetalert2';

const baseUrl = 'http://localhost:3001/v1/users/login'
const headers = {
    'Content-Type': 'application/json'
}

export default function LoginForm() {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const onFormSubmit = async (data) => {
        try {
            await axios.post(baseUrl, data, { headers })
            await Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'You are logged',
                showConfirmButton: false,
                timer: 2000
            })
        } catch (err) {
            await Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Login incorrect',
                showConfirmButton: false,
                timer: 2000
            })
            if (err.response) {
                console.log(err.response.status)
            } else {
                console.log('Error', err.message)
            }
        }
    }
    const onErrors = errors => console.log(errors)
    return (
        <>
            <div className={styles.container}>
                <form className={styles.login} onSubmit={handleSubmit(onFormSubmit, onErrors)}>
                    <h1 className={styles.subtitle}>Welcome </h1>

                    <input
                        type="text"
                        id="email"
                        name="email"
                        placeholder="Write your email"
                        required
                        {...register('email', {
                            required: "email is required", minLength: {
                                value: 5,
                                message: "email should have the patern email@email.com"
                            }
                        })}
                    />
                    <small className={styles.error}>
                        {errors?.email && errors.email.message}
                    </small>

                    <input
                        type="password"
                        id="password"
                        name="password" placeholder="Write your password"
                        {...register('password', {
                            required: "password is required", minLength: {
                                value: 8,
                                message: "Password must have at least 8 characters"
                            }
                        })}
                    />
                    <small className={styles.error}>
                        {errors?.password && errors.password.message}
                    </small>
                    <button type="Submit">
                        Login
                    </button>

                    <div className={styles.signup}>
                        <p>Not a member? <Link href='/register'><span>Sign up now</span></Link></p>
                    </div>
                </form>
            </div>
        </>
    )
}