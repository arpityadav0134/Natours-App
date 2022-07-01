import React from 'react'
import './Home.css'

const Home = () => {
    return (
        <>
            <div className='home-main'>

                <div className="upper-half">
                    <p>Find your special tour today</p>
                    <h1>with NATOURS</h1>
                </div>

                <div className="lower-half">
                    <div className="left">
                        <a className='btn' href='/find-tours'>Find</a>
                        <p>tours Best suited for you!!</p>
                    </div>

                    <div className="right">
                        <a className='btn' href='/top-tours'>Check</a>
                        <p>out our TOP-Rated tours!!</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home