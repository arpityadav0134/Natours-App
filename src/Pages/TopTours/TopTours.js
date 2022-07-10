import React, { useEffect, useState } from 'react'
import TourCard from '../Common/Components/TourCard/TourCard'
import Spinner from '../Common/Components/Spinner/Spinner'
import SnackBar from '../Common/Components/Snackbar/Snackbar'
import './TopTours.css'

const TopTours = () => {

    const [topTours, settopTours] = useState({
        totalResults: 0,
        tours: []
    })
    const [loading, setLoading] = useState(true)
    const [displayAlert, setDisplayAlert] = useState(false)
    const [alertMsg, setAlertMsg] = useState('')
    const fetchtopTours = async () => {
        setLoading(true)
        const url = `https://natours-by-arpit.herokuapp.com/api/v1/tours/top-5-cheap`
        try {
            const res = await fetch(url, {
                method: 'GET',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const json = await res.json()

            if (json.status !== 'success') {
                setAlertMsg({
                    message: 'Some Error Occurred...Please try after some time!',
                    error: true
                })
                setDisplayAlert(true)
            }
            else {
                settopTours({
                    totalResults: json.totalResults,
                    tours: json.data.data
                })
            }
        } catch (err) {
            setAlertMsg({
                message: 'Some Error Occurred...Please try after some time!',
                error: true
            })
            setDisplayAlert(true)
        }
        setLoading(false)
    }
    useEffect(() => {
        fetchtopTours()
        //eslint-disable-next-line
    }, [])
    useEffect(() => {
        setTimeout(() => {
            setDisplayAlert(false)
        }, 2000);
    }, [displayAlert])

    return (
        <div className='content'>
            <div className="top-tours-heading">
                <h1>Select from the best of all!</h1>
            </div>
            {/* <div className='main'> */}
            <div className="card-container">
                {loading ? <Spinner /> : ''}
                {!loading && topTours.tours.map((ele, i) => {
                    return <TourCard tour={ele} key={i} />
                })}
            </div>
            {/* </div > */}
            {displayAlert ? <SnackBar message={alertMsg} /> : ''}
        </div>
    )
}

export default TopTours