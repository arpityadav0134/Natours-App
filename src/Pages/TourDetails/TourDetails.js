import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { UserContext } from '../../Context APIs/UserContextAPI'
import ImageSlider from '../Common/Components/Carousel/ImageSlider'
import Spinner from '../Common/Components/Spinner/Spinner'
import './TourDetails.css'

const TourDetails = () => {

    const { user } = useContext(UserContext)
    const [loading, setLoading] = useState(true)
    const { tourName } = useParams()
    const [tour, setTour] = useState({})
    const [reviews, setReviews] = useState([])
    const [images, setImages] = useState([])

    const fetchReviews = async () => {

        const url = `https://natours-by-arpit.herokuapp.com/api/v1/tours/${tour.id}/reviews`

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
            setReviews(json.data.data)
        }
    }
    const fetchTour = async () => {

        setLoading(true)
        const url = `https://natours-by-arpit.herokuapp.com/api/v1/tours?slug=${tourName}`

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
                setLoading(false)
                setTour(json.data.data[0])
            }
        }
        catch (err) {
            console.log(err.message);

        }
        setLoading(false)
    }
    useEffect(() => {
        fetchTour()
        //eslint-disable-next-line
    }, [])
    useEffect(() => {
        if (tour.name) {
            if(user.isLoggedIn){
                fetchReviews()
            }
            setImages([
                {
                    src: `/img/tours/${tour.images[0]}`,
                    alt: "Image 1"
                },
                {
                    src: `/img/tours/${tour.images[1]}`,
                    alt: "Image 2 "
                },
                {
                    src: `/img/tours/${tour.images[2]}`,
                    alt: "Image 3"
                }
            ])
        }
        //eslint-disable-next-line
    }, [tour])

    return (
        <div className='content'>
            {
                loading
                    ?
                    <Spinner />
                    :
                    <div className="main-window">
                        <div className='tour-main'>
                            <section className="section-header">
                                <div className="header__hero">
                                    <div className="header__hero-overlay">&nbsp;</div>
                                    <img className="header__hero-img" src={`/img/tours/${tour.imageCover}`} alt={`${tour.name} Tour`} />
                                </div>
                                <div className="heading-box">
                                    <h1 className="heading-primary">
                                        <span>{`${tour.name}`} Tour</span>
                                    </h1>
                                    <div className="heading-box__group">
                                        <div className="heading-box__detail">
                                            <span className="heading-box__icon">
                                                <i className="fa-regular fa-clock"></i>
                                            </span>
                                            <span className="heading-box__text">{` ${tour.duration} days`}</span>
                                        </div>
                                        <div className="heading-box__detail">
                                            <span className="heading-box__icon">
                                                <i className="fa-solid fa-location-dot"></i>
                                            </span>
                                            <span className="heading-box__text">{` ${tour.startLocation.description}`}</span>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section className="section-description">
                                <div className="overview-box">
                                    <div>
                                        <div className="overview-box__group">
                                            <h2 className="heading-secondary">Quick facts</h2>
                                            <div className="overview-details">
                                                <div className="overview-box__detail">
                                                    <span className="overview-box__icon">
                                                        <i className="fa-regular fa-calendar"></i>
                                                    </span>
                                                    <span className="overview-box__label">Next date</span>
                                                    <span className="overview-box__text">{`${tour.startDates[0].slice(0, 10)}`}</span>
                                                </div>
                                                <div className="overview-box__detail">
                                                    <span className="overview-box__icon">
                                                        <i className="fa-solid fa-arrow-trend-up"></i>
                                                    </span>
                                                    <span className="overview-box__label">Difficulty</span>
                                                    <span className="overview-box__text">{`${tour.difficulty}`}</span>
                                                </div>
                                                <div className="overview-box__detail">
                                                    <span className="overview-box__icon">
                                                        <i className="fa-solid fa-people-group"></i>
                                                    </span>
                                                    <span className="overview-box__label">Participants</span>
                                                    <span className="overview-box__text">{`${tour.maxGroupSize} people`}</span>
                                                </div>
                                                <div className="overview-box__detail">
                                                    <span className="overview-box__icon">
                                                        <i className="fa-regular fa-star"></i>
                                                    </span>
                                                    <span className="overview-box__label">Rating</span>
                                                    <span className="overview-box__text">{`${tour.ratingsAverage}`} / 5</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="overview-box__group">
                                            <h2 className="heading-secondary">Your tour guides</h2>
                                            <div className="overview-details">
                                                {tour.guides.map((ele, i) => {

                                                    return <div className="overview-box__detail" key={i}>
                                                        <img className="overview-box__img" src={`/img/users/${ele.photo}`} alt="Miyah Myles" />
                                                        <span className="overview-box__label">{`${ele.role}`}</span>
                                                        <span className="overview-box__text">{`${ele.name}`}</span>
                                                    </div>
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="description-box">
                                    <h2 className="heading-secondary">About {`${tour.name}`} Tour</h2>
                                    <p className="description__text">{`${tour.description.split('\n')[0]}`}</p>
                                    <p className="description__text">{`${tour.description.split('\n')[1]}`}</p>
                                </div>
                            </section>
                            <section className="pictures">
                                <div className="section-pictures">
                                    <div className="picture-box">
                                        <img className="picture-box__img picture-box__img--1" src={`/img/tours/${tour.images[0]}`} alt={`${tour.name} Tour 1`} />
                                    </div>
                                    <div className="picture-box">
                                        <img className="picture-box__img picture-box__img--2" src={`/img/tours/${tour.images[1]}`} alt={`${tour.name} Tour 2`} />
                                    </div>
                                    <div className="picture-box">
                                        <img className="picture-box__img picture-box__img--3" src={`/img/tours/${tour.images[2]}`} alt={`${tour.name} Tour 3`} />
                                    </div>
                                </div>
                                <div className="section-carousel">
                                    <ImageSlider images={images} />
                                </div>
                            </section>
                            {user.isLoggedIn ? <section className="section-reviews">
                                <div className="reviews">

                                    {reviews.map((ele, i) => {

                                        return <div className="reviews__card" key={i}>
                                            <div className="reviews__avatar">
                                                <img className="reviews__avatar-img" src={`/img/users/${ele.user.photo}`} alt='' />
                                                <h6 className="reviews__user">{`${ele.user.name}`}</h6>
                                            </div>
                                            <p className="reviews__text">{`${ele.review}`}</p>
                                            <div className="reviews__rating">
                                                Rated: {`${ele.rating}/5`}
                                            </div>
                                        </div>
                                    })}
                                </div>
                            </section> : ''}
                            <section className="section-cta">
                                <div className="cta">
                                    <div className="cta__content">
                                        <h2 className="heading-secondary">What are you waiting for?</h2>
                                        <p className="cta__text">{`${tour.duration}`} days. 1 adventure. Infinite memories. Make it yours today!</p>
                                    </div>
                                    <button className="btn btn--green span-all-rows" id="book-tour" data-tour-id="5c88fa8cf4afda39709c2955">Book tour now!</button>
                                </div>
                            </section>
                        </div>
                    </div>
            }
        </div>
    )
}

export default TourDetails

