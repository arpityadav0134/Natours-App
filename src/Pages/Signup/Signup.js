import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../Context APIs/UserContextAPI'
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
    const handleOnChange = (e) => {
        setDetails({ ...details, [e.target.name]: e.target.value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
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
                alert('Invalid details!!')
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
        setDetails({
            name: "",
            email: "",
            password: "",
            passwordConfirm: ""
        })
    }

    if (user.isLoggedIn) {
        return navigate('/')
    }

    return (
        <div>
            <div className="main-page">
                <div className="main-form">
                    <h2 className='form-heading'>CREATE YOUR ACCOUNT!</h2>
                    <form className='html-form'>
                        <div className="form-inputs">
                            <input onChange={(e) => { handleOnChange(e) }} value={details.name} type="text" id='name' name='name' className="form-input" placeholder='Enter your name' autoComplete='off' required />
                            <input onChange={(e) => { handleOnChange(e) }} value={details.email} type="email" id='email' name='email' className="form-input" placeholder='Enter your email' autoComplete='off' required />
                            <input onChange={(e) => { handleOnChange(e) }} value={details.password} type="password" id='password' name='password' className="form-input" placeholder='Enter your password' autoComplete='off' required />
                            <input onChange={(e) => { handleOnChange(e) }} value={details.passwordConfirm} type="password" id='passwordConfirm' name='passwordConfirm' className="form-input" placeholder='Confirm your password' autoComplete='off' required />

                            <div className="form-buttons">
                                <button className='btn' onClick={handleSubmit} >Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
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