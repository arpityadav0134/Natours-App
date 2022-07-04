import React, { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../Context APIs/UserContextAPI'
import '../Common/Styles/Form.css'

const Login = () => {

    const { user, setUser } = useContext(UserContext)
    let navigate = useNavigate()
    const [credentials, setCredentials] = useState({
        email: "",
        password: ""
    })
    const [resetFormDisplay, setResetFormDisplay] = useState(false)
    const handleOnChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    const handleLogin = async (e) => {
        e.preventDefault()
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
                alert('Invalid Credentials!!')
            }
            else {
                setUser({
                    isLoggedIn: true,
                    user: json.data.user
                })
                //redirect user to landing page 
                navigate('/')
            }
        } catch {
            alert('Internal Server Error')
        }
        setCredentials({
            email: "",
            password: ""
        })
    }
    useEffect(() => {
        setResetFormDisplay(false)
        //eslint-disable-next-line
    }, [])
    const handleReset = (e) => {
        e.preventDefault()
        setResetFormDisplay(!resetFormDisplay)
    }
    const handleResetSubmit = async (e) => {
        e.preventDefault()
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
                alert('Invalid Credentials!!')
            }
            else {
                alert('Check your email for the link to reset your password')
            }
        } catch {
            alert('Internal Server Error')
        }
        setCredentials({
            email: "",
            password: ""
        })
    }

    if (user.isLoggedIn) {
        return navigate('/')
    }

    return (
        <>
            <div>
                <div className="main-page">
                    {/* LOGIN-FORM */}
                    <div className={`main-form ${resetFormDisplay ? 'display-none' : ''}`}>
                        <h2 className='form-heading'>LOG IN TO YOUR ACCOUNT</h2>
                        <form className='html-form'>
                            <div className="form-inputs">
                                <input type="email" name='email' className="form-input" placeholder='Enter your email' onChange={(e) => { handleOnChange(e) }} value={credentials.email} autoComplete='off' required />

                                <input type="password" name='password' className="form-input" placeholder='Enter your password' onChange={(e) => { handleOnChange(e) }} value={credentials.password} required />
                                <div className="form-buttons">
                                    <button className='link' onClick={handleReset}>Forgot Password?</button>
                                    <button className='btn' onClick={handleLogin}>Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    {/* RESET-PASSWORD-FORM */}
                    <div className={`main-form ${!resetFormDisplay ? 'display-none' : ''}`}>
                        <h2 className='form-heading'>RESET YOUR PASSWORD</h2>
                        <p className='form-description'>A link will be sent to this email address to reset the password</p>
                        <form className='html-form'>
                            <div className="form-inputs">
                                <input type="email" name='email' className="form-input" placeholder='Enter your registered email address' onChange={(e) => { handleOnChange(e) }} value={credentials.email} autoComplete='off' required />
                                <div className="form-buttons">
                                    <button className='link' onClick={handleReset}>Back To Login</button>
                                    <button className='btn' onClick={handleResetSubmit}>Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login