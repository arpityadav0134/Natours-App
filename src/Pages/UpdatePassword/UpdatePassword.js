import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import SnackBar from '../Common/Components/Snackbar/Snackbar'
import { disableButton, enableButton } from '../Common/Utils/toggleButtonState'
import '../Common/Styles/Form.css'

const UpdatePassword = () => {
    let navigate = useNavigate()
    const { passwordResetToken } = useParams()
    const [credentials, setCredentials] = useState({
        password: "",
        passwordConfirm: ""
    })
    const [displayAlert, setDisplayAlert] = useState(false)
    const [alertMsg, setAlertMsg] = useState('')
    const handleOnChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    const handleUpdateSubmit = async (e) => {
        e.preventDefault()
        disableButton(e.target.querySelector('.btn'))
        try {
            const res = await fetch(`https://natours-by-arpit.herokuapp.com/api/v1/users/resetPassword/${passwordResetToken}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ password: credentials.password, passwordConfirm: credentials.passwordConfirm })
            })
            const json = await res.json()
            console.log(json);

            if (json.status !== 'success') {
                setAlertMsg({
                    message: 'Password was not updated!',
                    error: true
                })
                setDisplayAlert(true)
            }
            else {
                setAlertMsg({
                    message: 'Password updated successfully!',
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
        if (alertMsg.message === 'Password updated successfully!') {
            setTimeout(() => {
                navigate('/')
            }, 2000);
        }
        //eslint-disable-next-line
    }, [alertMsg])


    return (
        <div className='content'>
            <div className='main-page'>
                <div className='main-form'>
                    <h2 className='form-heading'>UPDATE YOUR PASSWORD</h2>
                    <form className='html-form' onSubmit={handleUpdateSubmit}>
                        <div className="form-inputs">
                            <input onChange={(e) => { handleOnChange(e) }} type="password" id='password' name='password' autoComplete='off' className="form-input" placeholder='Enter new password' value={credentials.password} required />

                            <input onChange={(e) => { handleOnChange(e) }} type="password" id='passwordConfirm' name='passwordConfirm' autoComplete='off' className="form-input" placeholder='Confirm your password' value={credentials.passwordConfirm} required />

                            <div className="form-buttons">
                                <button className='btn' type='submit'>Update Password</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            {displayAlert ? <SnackBar message={alertMsg} /> : ''}
        </div>
    )
}

export default UpdatePassword