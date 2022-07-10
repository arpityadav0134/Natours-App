import React, { useState, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../Context APIs/UserContextAPI'
import { disableButton, enableButton } from '../Common/Utils/toggleButtonState'
import SnackBar from '../Common/Components/Snackbar/Snackbar'
import '../Common/Styles/Form.css'

const Signup = () => {
    let navigate = useNavigate()
    const { user, setUser } = useContext(UserContext)
    const [details, setDetails] = useState({
        name: "",
        email: "",
        password: "",
        passwordConfirm: ""
    })
    const [displayAlert, setDisplayAlert] = useState(false)
    const [alertMsg, setAlertMsg] = useState('')
    const handleOnChange = (e) => {
        setDetails({ ...details, [e.target.name]: e.target.value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        disableButton(e.target.querySelector('.btn'))
        try {
            const res = await fetch('https://natours-by-arpit.herokuapp.com/api/v1/users/signup', {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: details.name,
                    email: details.email,
                    password: details.password,
                    passwordConfirm: details.passwordConfirm
                })
            })
            const json = await res.json()
            console.log(json);

            if (json.status !== 'success') {
                setAlertMsg({
                    message: 'Invalid Details!',
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
        } catch {
            setAlertMsg({
                message: 'Some Error Occurred!',
                error: true
            })
            setDisplayAlert(true)
        }
        enableButton(e.target.querySelector('.btn'))
        setDetails({
            name: "",
            email: "",
            password: "",
            passwordConfirm: ""
        })
    }
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
                <div className="main-form">
                    <h2 className='form-heading'>CREATE YOUR ACCOUNT!</h2>
                    <form className='html-form' onSubmit={handleSubmit}>
                        <div className="form-inputs">
                            <input onChange={(e) => { handleOnChange(e) }} value={details.name} type="text" id='name' name='name' className="form-input" placeholder='Enter your name' autoComplete='off' required />
                            <input onChange={(e) => { handleOnChange(e) }} value={details.email} type="email" id='email' name='email' className="form-input" placeholder='Enter your email' autoComplete='off' required />
                            <input onChange={(e) => { handleOnChange(e) }} value={details.password} type="password" id='password' name='password' className="form-input" placeholder='Enter your password' autoComplete='off' required />
                            <input onChange={(e) => { handleOnChange(e) }} value={details.passwordConfirm} type="password" id='passwordConfirm' name='passwordConfirm' className="form-input" placeholder='Confirm your password' autoComplete='off' required />

                            <div className="form-buttons">
                                <button className='btn' type='submit' >Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            {displayAlert ? <SnackBar message={alertMsg} /> : ''}
        </div>
    )
}

export default Signup

/*
{status: 'success', token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyY…TI5fQ._pNsUklAhfziiGxDVSRaHwsaG_Se50pWZAiw65-N32w', data: {…}}

data: 
    user: {photo: 'default.jpg', role: 'user', active: true, _id: '62be09d8556e600016274821', name: 'Arpit Yadav', …}[[Prototype]]: Object

    status: "success"

    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9eyJpZCI6IjYyYmUwOWQ4NTU2ZTYwMDAxNjI3NDgyMSIsImlhdCI6MTY1NjYyMTUyOSwiZXhwIjoxNjY0Mzk3NTI5fQ._pNsUklAhfziiGxDVSRaHwsaG_Se50pWZAiw65-N32w"

*/