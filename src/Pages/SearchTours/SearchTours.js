import React, { useState } from 'react'
import './SearchTours.css'
import Tours from '../Common/Components/Tours/Tours'

const SearchTours = () => {

    const [filter, setFilter] = useState({})

    const handleOnChange = (e) => {
        setFilter({ ...filter, [e.target.name]: e.target.value })
    }

    return (
        <div className='content'>
            <div className="search-tours-heading">
                <h1>Find tours best suited for you!</h1>
            </div>
            <div className='search-tours-main'>
                <div className="search-tours">
                    <h1 className='search-form-heading'>Apply filters here</h1>
                    <form className='search-main-form'>
                        <div className="search-form-field">
                            <label className='search-form-label' htmlFor="name">Tour Name</label>
                            <input className='search-form-input' onChange={handleOnChange} value={filter.name ? filter.name : ''} type="text" name='name' placeholder='Ex: The Forest Hiker' />
                        </div>

                        <div className="search-form-field">
                            <label className='search-form-label' htmlFor="ratingsAverage">Min Rating</label>
                            <div className="search-form-radios">
                                <input className='form-radio' onChange={handleOnChange} type='radio' name="ratingsAverage" value='1' /><span className='radio-text'>1</span>
                                <input className='form-radio' onChange={handleOnChange} type='radio' name="ratingsAverage" value='2' /><span className='radio-text'>2</span>
                                <input className='form-radio' onChange={handleOnChange} type='radio' name="ratingsAverage" value='3' /><span className='radio-text'>3</span>
                                <input className='form-radio' onChange={handleOnChange} type='radio' name="ratingsAverage" value='4' /><span className='radio-text'>4</span>
                                <input className='form-radio' onChange={handleOnChange} type='radio' name="ratingsAverage" value='5' /><span className='radio-text'>5</span>
                            </div>
                        </div>

                        <div className="search-form-field">
                            <label className='search-form-label' htmlFor="price">Max Price (per person in $)</label>
                            <input className='search-form-input' onChange={handleOnChange} value={filter.price ? filter.price : ''} type="number" name="price" placeholder='Ex: 700' />
                        </div>

                        <div className="search-form-field">
                            <label className='search-form-label' htmlFor="duration">Max Duration (in days)</label>
                            <input className='search-form-input' onChange={handleOnChange} value={filter.duration ? filter.duration : ''} type="number" name="duration" placeholder='Ex: 7' />
                        </div>

                        <div className="search-form-field">
                            <label className='search-form-label' htmlFor="groupsize">Max Group Size</label>
                            <input className='search-form-input' onChange={handleOnChange} value={filter.maxGroupSize ? filter.maxGroupSize : ''} type="number" name="maxGroupSize" placeholder='Ex: 13' />
                        </div>

                        <div className="search-form-field">
                            <label className='search-form-label' htmlFor="difficulty">Tour Difficulty</label>
                            <div className="search-form-radios">
                                <input className='form-radio' onChange={handleOnChange} type="radio" name="difficulty" value='easy' /><span className='radio-text'>Easy</span>
                                <input className='form-radio' onChange={handleOnChange} type="radio" name="difficulty" value='medium' /><span className='radio-text'>Medium</span>
                                <input className='form-radio' onChange={handleOnChange} type="radio" name="difficulty" value='difficult' /><span className='radio-text'>Difficult</span>
                            </div>
                        </div>
                        <div className="search-form-field">
                            <label className='search-form-label' htmlFor="startLocationWithin">Max Distance of Start Location</label>
                            <input className='search-form-input' onChange={handleOnChange} value={filter.startLocationWithin ? filter.startLocationWithin : ''} type="number" name="startLocationWithin" placeholder='Ex: 250' style={{ width: '70%', display: 'inline-block' }} />
                            <select className='search-form-input' onChange={handleOnChange} value={filter.distUnit ? filter.distUnit : ''} name="distUnit" style={{ width: '30%', display: 'inline-block' }}>
                                <option value="kms">kms</option>
                                <option value="mi">miles</option>
                            </select>
                        </div>

                        <div className="search-form-field">
                            <label className='search-form-label' htmlFor="">From</label>

                            <input className='search-form-input' style={{ width: '50%', display: 'inline-block' }} onChange={handleOnChange} value={filter.lat ? filter.lat : ''} type="text" name="lat" placeholder='Latitude. Ex: 22.68994' />
                            <input className='search-form-input' style={{ width: '50%', display: 'inline-block' }} onChange={handleOnChange} value={filter.long ? filter.long : ''} type="text" name="long" placeholder='Longitude. Ex: 75.82292' />
                        </div>
                    </form>
                </div >
                <div className="searchResults">
                    <Tours filter={filter} pageSize={6} />
                </div>
            </div >
        </div>
    )
}

export default SearchTours