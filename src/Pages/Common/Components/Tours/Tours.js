import React, { useEffect, useState, useRef } from 'react'
import TourCard from '../TourCard/TourCard'
import InfiniteScroll from "react-infinite-scroll-component"
import Spinner from '../Spinner/Spinner'
import SnackBar from '../Snackbar/Snackbar'
import './Tours.css'

const Tours = (props) => {

    const [allTours, setAllTours] = useState({
        totalResults: 0,
        tours: [],
        hasMore: true
    })
    const [loading, setLoading] = useState(false)
    const [displayAlert, setDisplayAlert] = useState(false)
    const [alertMsg, setAlertMsg] = useState('')
    const spinner = useRef()
    const { pageSize } = props
    const page = useRef(1)
    let url = `https://natours-by-arpit.herokuapp.com/api/v1/tours?limit=${pageSize}&page=${page.current}`

    const fetchAllTours = async () => {
        page.current = 1
        url = `https://natours-by-arpit.herokuapp.com/api/v1/tours?limit=${pageSize}&page=${page.current}`

        if (props.filter.startLocationWithin && props.filter.lat && props.filter.long && props.filter.distUnit) {
            url = `https://natours-by-arpit.herokuapp.com/api/v1/tours/tours-within/${props.filter.startLocationWithin}/center/${props.filter.lat},${props.filter.long}/unit/${props.filter.distUnit}?limit=${pageSize}&page=${page.current}`

        }
        if (props.filter.name) {
            url = url + `&name=${props.filter.name}`
        }
        if (props.filter.ratingsAverage) {
            url = url + `&ratingsAverage[gte]=${props.filter.ratingsAverage}`
        }
        if (props.filter.price) {
            url = url + `&price[lte]=${props.filter.price}`
        }
        if (props.filter.duration) {
            url = url + `&duration[lte]=${props.filter.duration}`
        }
        if (props.filter.maxGroupSize) {
            url = url + `&maxGroupSize[lte]=${props.filter.maxGroupSize}`
        }
        if (props.filter.difficulty) {
            url = url + `&difficulty=${props.filter.difficulty}`
        }

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
                throw new Error('request not completed')
            }
            else {
                if (json.data.data.length < pageSize) {
                    setAllTours({
                        totalResults: json.totalResults,
                        tours: json.data.data,
                        hasMore: false
                    })
                } else {
                    setAllTours({
                        totalResults: json.totalResults,
                        tours: json.data.data,
                        hasMore: true
                    })
                }
            }
        } catch (err) {
            setAlertMsg({
                message: 'Some Error Occurred!',
                error: true
            })
            setDisplayAlert(true)
        }
    }
    const fetchMoreData = async () => {
        page.current = page.current + 1
        url = `https://natours-by-arpit.herokuapp.com/api/v1/tours?limit=${pageSize}&page=${page.current}`

        if (props.filter.startLocationWithin && props.filter.lat && props.filter.long && props.filter.distUnit) {
            url = `https://natours-by-arpit.herokuapp.com/api/v1/tours/tours-within/${props.filter.startLocationWithin}/center/${props.filter.lat},${props.filter.long}/unit/${props.filter.distUnit}?limit=${pageSize}&page=${page.current}`

        }
        if (props.filter.name) {
            url = url + `&name=${props.filter.name}`
        }
        if (props.filter.ratingsAverage) {
            url = url + `&ratingsAverage[gte]=${props.filter.ratingsAverage}`
        }
        if (props.filter.price) {
            url = url + `&price[lte]=${props.filter.price}`
        }
        if (props.filter.duration) {
            url = url + `&duration[lte]=${props.filter.duration}`
        }
        if (props.filter.maxGroupSize) {
            url = url + `&maxGroupSize[lte]=${props.filter.maxGroupSize}`
        }
        if (props.filter.difficulty) {
            url = url + `&difficulty=${props.filter.difficulty}`
        }
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
                throw new Error('request not completed')
            }
            else {
                if (json.data.data.length < pageSize) {
                    setAllTours({
                        totalResults: json.totalResults,
                        tours: allTours.tours.concat(json.data.data),
                        hasMore: false
                    })
                } else {
                    setAllTours({
                        totalResults: json.totalResults,
                        tours: allTours.tours.concat(json.data.data),
                        hasMore: true
                    })
                }
            }
        } catch (err) {
            setAlertMsg({
                message: 'Some Error Occurred!',
                error: true
            })
            setDisplayAlert(true)
        }
    }
    useEffect(() => {
        fetchAllTours()
        //eslint-disable-next-line
    }, [])
    useEffect(() => {
        spinner.current.style.display = 'block'
        setLoading(true)
        //eslint-disable-next-line
    }, [props])
    useEffect(() => {
        fetchAllTours()
        spinner.current.style.display = 'none'
        setLoading(false)
        //eslint-disable-next-line
    }, [loading])
    useEffect(() => {
        setTimeout(() => {
            setDisplayAlert(false)
        }, 2000);
    }, [displayAlert])

    return (
        <div className='tour-cards'>
            <div ref={spinner}><Spinner /></div>
            <InfiniteScroll
                dataLength={allTours.tours.length}
                next={fetchMoreData}
                hasMore={allTours.hasMore}
                // hasMore={allTours.tours.length === 0 ? 1 : allTours.tours.length < allTours.totalResults}
                loader={<Spinner />}
            >
                <div className="card-container">
                    {allTours.tours.map((ele, i) => {
                        return <TourCard tour={ele} key={i} />
                    })}
                </div>
            </InfiniteScroll>
            {displayAlert ? <SnackBar message={alertMsg} /> : ''}
        </div>
    )
}

export default Tours