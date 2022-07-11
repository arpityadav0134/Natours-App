import React, { useState, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../../Context APIs/UserContextAPI'
import SnackBar from '../Common/Components/Snackbar/Snackbar'
import { disableButton, enableButton } from '../Common/Utils/toggleButtonState'
import './UserAccount.css'


const UserAccount = () => {

    const [displayNav, setDisplayNav] = useState(false)
    const { user, setUser } = useContext(UserContext)
    const [details, setDetails] = useState({
        name: user.user.name,
        email: user.user.email,
        file: null
    })
    const [passwords, setPasswords] = useState({
        oldPassword: '',
        newPassword: '',
        passwordConfirm: ''
    })
    const [displayAlert, setDisplayAlert] = useState(false)
    const [alertMsg, setAlertMsg] = useState('')
    const handleToggle = () => {
        setDisplayNav(!displayNav)
    }
    const handleOnChangeF1 = (e) => {
        setDetails({ ...details, [e.target.id]: e.target.value })
        // setPasswords({ ...passwords, [e.target.name]: e.target.value })
    }
    const handleOnChangeF2 = (e) => {
        // setDetails({ ...details, [e.target.id]: e.target.value })
        setPasswords({ ...passwords, [e.target.id]: e.target.value })
    }
    const handleSubmitSettings = async (e) => {
        e.preventDefault()
        disableButton(e.target.querySelector('.btn'))
        try {
            const res = await fetch('https://natours-by-arpit.herokuapp.com/api/v1/users/updateMe', {
                method: 'PATCH',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: details.name,
                    email: details.email,
                    file: details.file
                })
            })
            const json = await res.json()

            if (json.status !== 'success') {
                setAlertMsg({
                    message: 'Invalid values!',
                    error: true
                })
                setDisplayAlert(true)
            }
            else {
                setUser({
                    user: json.data.user
                })
                setAlertMsg({
                    message: 'Settings updated!',
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
            name: user.user.name,
            email: user.user.email
        })
    }
    const handleUpdatePassword = async (e) => {
        e.preventDefault()
        disableButton(e.target.querySelector('.btn'))
        try {
            const res = await fetch('https://natours-by-arpit.herokuapp.com/api/v1/users/updateMyPassword', {
                method: 'PATCH',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    passwordCurrent: passwords.oldPassword,
                    password: passwords.newPassword,
                    passwordConfirm: passwords.passwordConfirm
                })
            })
            const json = await res.json()
            // console.log(json);

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
        setPasswords({
            oldPassword: '',
            newPassword: '',
            passwordConfirm: ''
        })
    }
    useEffect(() => {
        setTimeout(() => {
            setDisplayAlert(false)
        }, 2000);
    }, [displayAlert])

    return (
        <div className='content'>
            <div className="main">
                <div className="user-view">
                    {/* left side navigation panel */}
                    {/* <div className='user-view__menu'>
                        <div className="ham-btn">
                            <i className="fa-solid fa-bars" onClick={handleToggle} ></i>
                        </div>
                        <ul className="side-nav" style={{ display: displayNav ? 'flex' : 'none' }}>
                            <li>
                                <Link to='/'>
                                    <i className="fa-solid fa-bars" ></i>
                                    SETTINGS
                                </Link>
                            </li>
                            <li>
                                <Link to='/'>
                                    <i className="fa-solid fa-bars" ></i>
                                    BOOKINGS
                                </Link>
                            </li>
                            <li>
                                <Link to='/'>
                                    <i className="fa-solid fa-bars" ></i>
                                    REVIEWS
                                </Link>
                            </li>
                        </ul>
                    </div>
                    */}
                {/* right side user content */}
                <div className="user-view__content" style={{ filter: displayNav ? 'blur(5px)' : 'none', pointerEvents: displayNav ? 'none' : '' }}>
                    {/* Account settings form */}
                    <div className="user-view__form-container">
                        <h2 className='form-heading'>ACCOUNT SETTINGS</h2>
                        <form className='html-form form-user-data' onSubmit={handleSubmitSettings}>
                            <div className="form-group">
                                <label className="form-label" htmlFor="name">Name</label>
                                <input value={details.name} onChange={handleOnChangeF1} className="form-input" id='name' type='text' required></input>
                            </div>
                            <div className="form-group">
                                <label className="form-label" htmlFor="email">Email address</label>
                                <input value={details.email} className="form-input" onChange={handleOnChangeF1} id='email' type='email' required></input>
                            </div>
                            <div className="form-group form-photo-upload">
                                <img className="form-user-photo" src={`/img/users/${user.user.photo}`} alt="" />
                                <label className="form-upload-label" htmlFor="photo">Choose new photo</label>
                                <input onChange={(e) => {
                                    console.log(e.target.files[0]);

                                }} className="form-upload" type="file" accept="image/*" id="photo" name="photo"></input>
                            </div>
                            <div className="form-buttons">
                                <button className='btn' type='submit'>SAVE SETTINGS</button>
                            </div>
                        </form>
                    </div>
                    {/* line of separation between the two forms */}
                    <div className="line">&nbsp;</div>
                    {/* Update password form */}
                    <div className="user-view__form-container">
                        <h2 className='form-heading'>UPDATE PASSWORD</h2>
                        <form className='html-form form-user-password' onClick={handleUpdatePassword}>
                            <div className="form-group">
                                <label className="form-label" htmlFor="password-current">Currnet password</label>
                                <input className="form-input" value={passwords.oldPassword} onChange={handleOnChangeF2} id='oldPassword' type='password'></input>
                            </div>
                            <div className="form-group">
                                <label className="form-label" htmlFor="password">New password</label>
                                <input className="form-input" value={passwords.newPassword} onChange={handleOnChangeF2} id='newPassword' type='password'></input>
                            </div>
                            <div className="form-group">
                                <label className="form-label" htmlFor="password-confirm">Confirm password</label>
                                <input className="form-input" value={passwords.passwordConfirm} onChange={handleOnChangeF2} id='passwordConfirm' type='password'></input>
                            </div>
                            <div className="form-buttons">
                                <button className='btn' type='submit' >SUBMIT</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
            { displayAlert ? <SnackBar message={alertMsg} /> : '' }
        </div >
    )
}

export default UserAccount