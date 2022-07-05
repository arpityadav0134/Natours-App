import React from 'react'
import './TourDetails.css'

const TourDetails = () => {
    return (
        <div className="main-window">
            <div className='tour-main'>
                <section className="section-header">
                    <div className="header__hero">
                        <div className="header__hero-overlay">&nbsp;</div>
                        <img className="header__hero-img" src="/img/tours/tour-2-cover.jpg" alt="The Sea Explorer" />
                    </div>
                    <div className="heading-box">
                        <h1 className="heading-primary">
                            <span>The Sea Explorer Tour</span>
                        </h1>
                        <div className="heading-box__group">
                            <div className="heading-box__detail">
                                <span className="heading-box__icon">
                                    <i className="fa-solid fa-bars" ></i>
                                </span>
                                <span className="heading-box__text">7 days</span>
                            </div>
                            <div className="heading-box__detail">
                                <span className="heading-box__icon">
                                    <i className="fa-solid fa-bars" ></i>
                                </span>
                                <span className="heading-box__text">Miami, USA</span>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-description">
                    <div className="overview-box">
                        <div>
                            <div className="overview-box__group">
                                <h2 className="heading-secondary">Quick facts</h2>
                                <div className="overview-box__detail">
                                    <span className="overview-box__icon">
                                        <i className="fa-solid fa-bars" ></i>
                                    </span>
                                    <span className="overview-box__label">Next date</span>
                                    <span className="overview-box__text">June 2021</span>
                                </div>
                                <div className="overview-box__detail">
                                    <span className="overview-box__icon">
                                        <i className="fa-solid fa-bars" ></i>
                                    </span>
                                    <span className="overview-box__label">Difficulty</span>
                                    <span className="overview-box__text">medium</span>
                                </div>
                                <div className="overview-box__detail">
                                    <span className="overview-box__icon">
                                        <i className="fa-solid fa-bars" ></i>
                                    </span>
                                    <span className="overview-box__label">Participants</span>
                                    <span className="overview-box__text">15 people</span>
                                </div>
                                <div className="overview-box__detail">
                                    <span className="overview-box__icon">
                                        <i className="fa-solid fa-bars" ></i>
                                    </span>
                                    <span className="overview-box__label">Rating</span>
                                    <span className="overview-box__text">4.8 / 5</span>
                                </div>
                            </div>
                            <div className="overview-box__group">
                                <h2 className="heading-secondary">Your tour guides</h2>
                                <div className="overview-box__detail">
                                    <img className="overview-box__img" src="/img/users/user-12.jpg" alt="Miyah Myles" />
                                    <span className="overview-box__label">Lead guide</span>
                                    <span className="overview-box__text">Miyah Myles</span>
                                </div>
                                <div className="overview-box__detail">
                                    <img className="overview-box__img" src="/img/users/user-6.jpg" alt="Jennifer Hardy" />
                                    <span className="overview-box__label">Tour guide</span>
                                    <span className="overview-box__text">Jennifer Hardy</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="description-box">
                        <h2 className="heading-secondary">About The Sea Explorer tour</h2>
                        <p className="description__text">Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <p className="description__text">Irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    </div>
                </section>
                <section className="section-pictures">
                    <div className="picture-box">
                        <img className="picture-box__img picture-box__img--1" src="/img/tours/tour-2-1.jpg" alt="The Park Camper Tour 1" />
                    </div>
                    <div className="picture-box">
                        <img className="picture-box__img picture-box__img--2" src="/img/tours/tour-2-2.jpg" alt="The Park Camper Tour 2" />
                    </div>
                    <div className="picture-box">
                        <img className="picture-box__img picture-box__img--3" src="/img/tours/tour-2-3.jpg" alt="The Park Camper Tour 3" />
                    </div>
                </section>
                <section className="section-reviews">
                    <div className="reviews">
                        <div className="reviews__card">
                            <div className="reviews__avatar">
                                <img className="reviews__avatar-img" src="/img/users/user-2.jpg" alt="Lourdes Browning" />
                                <h6 className="reviews__user">Lourdes Browning</h6>
                            </div>
                            {/* <div className="overview-box__detail">
                                <img className="overview-box__img" src="/img/users/user-12.jpg" alt="Miyah Myles" />
                                <span className="overview-box__label">Lead guide</span>
                                <span className="overview-box__text">Miyah Myles</span>
                            </div> */}
                            <p className="reviews__text">Cras mollis nisi parturient mi nec aliquet suspendisse sagittis eros condimentum scelerisque taciti mattis praesent feugiat eu nascetur a tincidunt</p>
                            <div className="reviews__rating">
                                <span className="overview-box__icon">
                                    <i className="fa-solid fa-bars" ></i>
                                </span>
                                <span className="overview-box__icon">
                                    <i className="fa-solid fa-bars" ></i>
                                </span>
                                <span className="overview-box__icon">
                                    <i className="fa-solid fa-bars" ></i>
                                </span>
                                <span className="overview-box__icon">
                                    <i className="fa-solid fa-bars" ></i>
                                </span>
                                <span className="overview-box__icon">
                                    <i className="fa-solid fa-bars" ></i>
                                </span>
                            </div>
                        </div>
                        <div className="reviews__card">
                            <div className="reviews__avatar">
                                <img className="reviews__avatar-img" src="/img/users/user-3.jpg" alt="Sophie Louise Hart" />
                                <h6 className="reviews__user">Sophie Louise Hart</h6>
                            </div>
                            <p className="reviews__text">Pulvinar taciti etiam aenean lacinia natoque interdum fringilla suspendisse nam sapien urna!</p>
                            <div className="reviews__rating">
                                <span className="overview-box__icon">
                                    <i className="fa-solid fa-bars" ></i>
                                </span>
                                <span className="overview-box__icon">
                                    <i className="fa-solid fa-bars" ></i>
                                </span>
                                <span className="overview-box__icon">
                                    <i className="fa-solid fa-bars" ></i>
                                </span>
                                <span className="overview-box__icon">
                                    <i className="fa-solid fa-bars" ></i>
                                </span>
                                <span className="overview-box__icon">
                                    <i className="fa-solid fa-bars" ></i>
                                </span>
                            </div>
                        </div>
                        <div className="reviews__card">
                            <div className="reviews__avatar">
                                <img className="reviews__avatar-img" src="/img/users/user-9.jpg" alt="Cristian Vega" />
                                <h6 className="reviews__user">Cristian Vega</h6>
                            </div>
                            <p className="reviews__text">Sem feugiat sed lorem vel dignissim platea habitasse dolor suscipit ultricies dapibus</p>
                            <div className="reviews__rating">
                                <span className="overview-box__icon">
                                    <i className="fa-solid fa-bars" ></i>
                                </span>
                                <span className="overview-box__icon">
                                    <i className="fa-solid fa-bars" ></i>
                                </span>
                                <span className="overview-box__icon">
                                    <i className="fa-solid fa-bars" ></i>
                                </span>
                                <span className="overview-box__icon">
                                    <i className="fa-solid fa-bars" ></i>
                                </span>
                                <span className="overview-box__icon">
                                    <i className="fa-solid fa-bars" ></i>
                                </span>
                            </div>
                        </div>
                        <div className="reviews__card">
                            <div className="reviews__avatar">
                                <img className="reviews__avatar-img" src="/img/users/user-14.jpg" alt="Laura Wilson" />
                                <h6 className="reviews__user">Laura Wilson</h6>
                            </div>
                            <p className="reviews__text">Blandit varius nascetur est felis praesent lorem himenaeos pretium dapibus tellus bibendum consequat ac duis</p>
                            <div className="reviews__rating">
                                <span className="overview-box__icon">
                                    <i className="fa-solid fa-bars" ></i>
                                </span>
                                <span className="overview-box__icon">
                                    <i className="fa-solid fa-bars" ></i>
                                </span>
                                <span className="overview-box__icon">
                                    <i className="fa-solid fa-bars" ></i>
                                </span>
                                <span className="overview-box__icon">
                                    <i className="fa-solid fa-bars" ></i>
                                </span>
                                <span className="overview-box__icon">
                                    <i className="fa-solid fa-bars" ></i>
                                </span>
                            </div>
                        </div>
                        <div className="reviews__card">
                            <div className="reviews__avatar">
                                <img className="reviews__avatar-img" src="/img/users/user-15.jpg" alt="Max Smith" />
                                <h6 className="reviews__user">Max Smith</h6></div>
                            <p className="reviews__text">Tempor pellentesque eu placerat auctor enim nam suscipit tincidunt natoque ipsum est.</p>
                            <div className="reviews__rating">
                                <span className="overview-box__icon">
                                    <i className="fa-solid fa-bars" ></i>
                                </span>
                                <span className="overview-box__icon">
                                    <i className="fa-solid fa-bars" ></i>
                                </span>
                                <span className="overview-box__icon">
                                    <i className="fa-solid fa-bars" ></i>
                                </span>
                                <span className="overview-box__icon">
                                    <i className="fa-solid fa-bars" ></i>
                                </span>
                                <span className="overview-box__icon">
                                    <i className="fa-solid fa-bars" ></i>
                                </span>
                            </div>
                        </div>
                        <div className="reviews__card">
                            <div className="reviews__avatar">
                                <img className="reviews__avatar-img" src="/img/users/user-19.jpg" alt="John Riley" />
                                <h6 className="reviews__user">John Riley</h6></div>
                            <p className="reviews__text">Magna magnis tellus dui vivamus donec placerat vehicula erat turpis</p>
                            <div className="reviews__rating">
                                <span className="overview-box__icon">
                                    <i className="fa-solid fa-bars" ></i>
                                </span>
                                <span className="overview-box__icon">
                                    <i className="fa-solid fa-bars" ></i>
                                </span>
                                <span className="overview-box__icon">
                                    <i className="fa-solid fa-bars" ></i>
                                </span>
                                <span className="overview-box__icon">
                                    <i className="fa-solid fa-bars" ></i>
                                </span>
                                <span className="overview-box__icon">
                                    <i className="fa-solid fa-bars" ></i>
                                </span>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default TourDetails