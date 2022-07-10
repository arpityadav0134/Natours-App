import React from 'react'
import { Link } from 'react-router-dom'
import './TourCard.css'

const TourCard = (props) => {

    const { tour } = props
    const slug = tour.name.replaceAll(' ', '-').toLowerCase()
    return (

        <div className="card">
            {/* A) CARD HEADER */}
            <div className="card__header">
                {/* Card Picture */}
                <div className="card__picture">
                    {/* <div className="card__picture-overlay">&nbsp;</div> */}
                    <img className="card__picture-img" src={`/img/tours/${tour.imageCover}`} alt={`${tour.name}`} />
                    {/* Card heading */}
                    <h3 className="heading-tertirary">
                        {`${tour.name}`}
                        {/* <span>The Sea Explorer</span> */}
                    </h3>
                </div>
            </div>
            {/* B) CARD DETAILS */}
            <div className="card__details">
                <div className="card-description">
                    <h4 className="card__sub-heading">{`${tour.difficulty} ${tour.duration}-day tour`}</h4>
                    <p className="card__text">{`${tour.summary}`}</p>
                </div>
                <div className="card-about">
                    <div className="card__data">
                        <span className="card__icon">
                        <i className="fa-solid fa-location-dot"></i>
                        </span>
                        <span>{`${tour.startLocation.description}`}</span>
                    </div>
                    <div className="card__data">
                        <span className="card__icon">
                        <i className="fa-regular fa-calendar"></i>
                        </span>
                        <span>{`${tour.startDates[0].slice(0, 10)}`}</span>
                    </div>
                    <div className="card__data">
                        <span className="card__icon">
                        <i className="fa-solid fa-flag"></i>
                        </span>
                        <span> {tour.locations.length} stops</span>
                    </div>
                    <div className="card__data">
                        <span className="card__icon">
                        <i className="fa-solid fa-people-group"></i>
                        </span>
                        <span>{`${tour.maxGroupSize} people`}</span>
                    </div>
                </div>
            </div>
            {/* CARD FOOTER */}
            <div className="card__footer">
                <p>
                    <span className="card__footer-value">{`$${tour.price}`} </span>
                    <span className="card__footer-text">/person</span>
                </p>
                <p className="card__ratings">
                    <span className="card__footer-value">{`${tour.ratingsAverage}`} </span>
                    <span className="card__footer-text">rating (6)</span>
                </p>
                <Link className="btn btn--green btn--small" to={`/tour/${slug}`}>Details</Link>
            </div>
        </div>
    )
}

export default TourCard
