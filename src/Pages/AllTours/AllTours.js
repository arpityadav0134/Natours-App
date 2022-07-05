import React, { useEffect, useState } from 'react'
import TourCard from '../Common/Components/TourCard/TourCard'
import InfiniteScroll from "react-infinite-scroll-component"
import Spinner from '../Common/Components/Spinner/Spinner'

const AllTours = (props) => {

    const [allTours, setAllTours] = useState({
        totalResults: 0,
        tours: []
    })
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const fetchAllTours = async () => {

        setLoading(true)
        const url = `https://natours-by-arpit.herokuapp.com/api/v1/tours?limit=${props.pageSize}&page=${page}`
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
                setAllTours({
                    totalResults: json.totalResults,
                    tours: json.data.data
                })
            }
        } catch {
            alert('Internal Server Error')
        }
        setLoading(false)
    }
    const fetchMoreData = async () => {

        const url = `https://natours-by-arpit.herokuapp.com/api/v1/tours?limit=${props.pageSize}&page=${page + 1}`

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
                setAllTours({
                    totalResults: json.totalResults,
                    tours: allTours.tours.concat(json.data.data)
                })
                setPage(page + 1)
            }
        } catch {
            alert('Internal Server Error')
        }
        setLoading(false)
    }
    useEffect(() => {
        fetchAllTours()
        //eslint-disable-next-line
    }, [])

    return (
        <div className='main'>
            <InfiniteScroll
                dataLength={allTours.totalResults}
                next={fetchMoreData}
                hasMore={allTours.tours.length === 0 ? 1 : allTours.tours.length < allTours.totalResults}
                loader={<Spinner />}
            >
                <div className="card-container">

                    {!loading && allTours.tours.map((ele, i) => {
                        return <TourCard tour={ele} key={i} />
                    })}
                </div>
            </InfiniteScroll>
        </div >
    )
}

export default AllTours