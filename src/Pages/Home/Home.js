import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
    return (
        <div className='content'>
            <div className='home-main'>

                <div className="upper-half">
                    <p>Find your special tour today</p>
                    <h1>with NATOURS</h1>
                </div>

                <div className="lower-half">
                    <div className="left">
                        <Link className='btn' to='/searchtours'>Find</Link>
                        <p>tours Best suited for you!!</p>
                    </div>

                    <div className="right">
                        <Link className='btn' to='/top-tours'>Check</Link>
                        <p>out our TOP-Rated tours!!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home