import React, { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../Context APIs/UserContextAPI'
import { disableButton, enableButton } from '../Common/Utils/toggleButtonState'
import SnackBar from '../Common/Components/Snackbar/Snackbar'
import '../Common/Styles/Form.css'

const Login = () => {

    let navigate = useNavigate()
    const { user, setUser } = useContext(UserContext)
    const [credentials, setCredentials] = useState({
        email: "",
        password: ""
    })
    const [displayAlert, setDisplayAlert] = useState(false)
    const [alertMsg, setAlertMsg] = useState('')
    const [resetFormDisplay, setResetFormDisplay] = useState(false)
    const handleOnChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    const handleLogin = async (e) => {
        e.preventDefault()
        disableButton(e.target.querySelector('.btn'))
        try {
            const res = await fetch('https://natours-by-arpit.herokuapp.com/api/v1/users/login', {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email: credentials.email, password: credentials.password })
            })
            const json = await res.json()

            if (json.status !== 'success') {
                setAlertMsg({
                    message: 'Invalid Credentials!',
                    error: true
                })
                setDisplayAlert(true)
            }
            else {
                setUser({
                    isLoggedIn: true,
                    user: json.data.user
                })
                setAlertMsg({
                    message: 'Login Successful!',
                    error: false
                })
                setDisplayAlert(true)
            }
        } catch (err) {
            setAlertMsg({
                message: 'Some Error Occurred!',
                error: true
            })
            setDisplayAlert(true)
        }
        enableButton(e.target.querySelector('.btn'))
        setCredentials({
            email: "",
            password: ""
        })
    }
    const handleReset = (e) => {
        e.preventDefault()
        setResetFormDisplay(!resetFormDisplay)
    }
    const handleResetSubmit = async (e) => {
        e.preventDefault()
        disableButton(e.target.querySelector('.btn'))
        try {
            const res = await fetch('https://natours-by-arpit.herokuapp.com/api/v1/users/forgotPassword', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email: credentials.email })
            })
            const json = await res.json()
            console.log(json);

            if (json.status !== 'success') {
                setAlertMsg({
                    message: 'Invalid Credentials!',
                    error: true
                })
                setDisplayAlert(true)
            }
            else {
                setAlertMsg({
                    message: 'Check your email!',
                    error: false
                })
                setDisplayAlert(true)
            }
        } catch {
            setAlertMsg({
                message: 'Some Error Occurred!',
                error: true
            })
            setDisplayAlert(true)

        }
        enableButton(e.target.querySelector('.btn'))
        setCredentials({
            email: "",
            password: ""
        })
    }
    useEffect(() => {
        setResetFormDisplay(false)
        //eslint-disable-next-line
    }, [])
    useEffect(() => {
        setTimeout(() => {
            setDisplayAlert(false)
        }, 2000);
    }, [displayAlert])

    if (user.isLoggedIn) {
        setTimeout(() => {
            navigate('/')
        }, 2000);
    }

    return (
        <div className='content'>
            <div className="main-page">
                {/* LOGIN-FORM */}
                <div className={`main-form ${resetFormDisplay ? 'display-none' : ''}`}>
                    <h2 className='form-heading'>LOG IN TO YOUR ACCOUNT</h2>
                    <form className='html-form' onSubmit={handleLogin}>
                        <div className="form-inputs">
                            <input type="email" name='email' className="form-input" placeholder='Enter your email' onChange={(e) => { handleOnChange(e) }} value={credentials.email} autoComplete='off' required />

                            <input type="password" name='password' className="form-input" placeholder='Enter your password' onChange={(e) => { handleOnChange(e) }} value={credentials.password} required />
                            <div className="form-buttons">
                                <button className='link' onClick={handleReset}>Forgot Password?</button>
                                <button className='btn' type='submit'>Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
                {/* RESET-PASSWORD-FORM */}
                <div className={`main-form ${!resetFormDisplay ? 'display-none' : ''}`}>
                    <h2 className='form-heading'>RESET YOUR PASSWORD</h2>
                    <p className='form-description'>A link will be sent to this email address to reset the password</p>
                    <form className='html-form' onSubmit={handleResetSubmit}>
                        <div className="form-inputs">
                            <input type="email" name='email' className="form-input" placeholder='Enter your registered email address' onChange={(e) => { handleOnChange(e) }} value={credentials.email} autoComplete='off' required />
                            <div className="form-buttons">
                                <button className='link' onClick={handleReset}>Back To Login</button>
                                <button className='btn' type='submit'>Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            {displayAlert ? <SnackBar message={alertMsg} /> : ''}
        </div>
    )
}

export default Login