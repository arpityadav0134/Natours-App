// const resetURL = `${req.protocol}://${req.get('host')}/resetPassword/${resetToken}`
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import '../Common/Styles/Form.css'

const UpdatePassword = () => {
    let navigate = useNavigate()
    const { passwordResetToken } = useParams()
    const [credentials, setCredentials] = useState({
        password: "",
        passwordConfirm: ""
    })
    const handleOnChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    const handleUpdateSubmit = async (e) => {
        e.preventDefault()
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
                alert('Password was not updated!!')
            }
            else {
                alert('Password updated successfully')
                navigate('/login')
            }
        } catch {
            alert('Internal Server Error')
        }
        setCredentials({
            email: "",
            password: ""
        })
    }
    return (
        <div className='main-page'>
            <div className='main-form'>
                <h2 className='form-heading'>UPDATE YOUR PASSWORD</h2>
                <form className='html-form'>
                    <div className="form-inputs">
                        <input onChange={(e) => { handleOnChange(e) }} type="password" id='password' name='password' autoComplete='off' className="form-input" placeholder='Enter new password' value={credentials.password} required />

                        <input onChange={(e) => { handleOnChange(e) }} type="password" id='passwordConfirm' name='passwordConfirm' autoComplete='off' className="form-input" placeholder='Confirm your password' value={credentials.passwordConfirm} required />

                        <div className="form-buttons">
                            <button className='btn' onClick={handleUpdateSubmit}>Update Password</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default UpdatePassword