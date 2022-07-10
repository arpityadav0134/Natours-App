import React from 'react'
import Tours from '../Common/Components/Tours/Tours'
import './AllTours.css'

const AllTours = () => {
    return (
        <div className='content'>
            <div className="alltours-main">
                <h1 className='all-tours-heading'>Experience the best tour of your life with us!</h1>
                <Tours pageSize={6} filter={{}} />
            </div>
        </div>
    )
}

export default AllTours