import React, { useEffect, useState } from 'react'
import TourCard from '../Common/Components/TourCard/TourCard'
import Spinner from '../Common/Components/Spinner/Spinner'

const TopTours = () => {

    const [topTours, settopTours] = useState({
        totalResults: 0,
        tours: []
    })
    const [loading, setLoading] = useState(true)
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
                alert('Internal Server Error!!')
                throw new Error('request not completed')
            }
            else {
                settopTours({
                    totalResults: json.totalResults,
                    tours: json.data.data
                })
            }
        } catch (err) {
            alert(err)
        }
        setLoading(false)
    }
    useEffect(() => {
        fetchtopTours()
        //eslint-disable-next-line
    }, [])

    return (
        <div className='main'>
            <div className="card-container">
                {loading ? <Spinner /> : ''}
                {!loading && topTours.tours.map((ele, i) => {
                    return <TourCard tour={ele} key={i} />
                })}
            </div>
        </div >
    )
}

export default TopTours