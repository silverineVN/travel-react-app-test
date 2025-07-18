import React from 'react'
import './SearchStyles.css'
import Gold from '../../assets/gold.png'

function Search() {
  return (
    <div className='search'>
        <div className="container">
            <div className="left">
                <h2>LUXURY INCLUDED VACATIONS FOR 2 PEOPLE</h2>
                <p>Hey guys, in this weeks video I built a front-end travel website in React JS. i'm not using any CSS frameworks in here so we will be writing custom CSS for all of our styling. We will re-use functional components and pass properties down to those components. We will be installing a few dependencies for this build such as React Icons, Smooth Scroll, and React-Responsive-Carousel. I'll throw all the links down below. Thanks for following along and as always, feedback welcome!</p>
            
            <div className="search-col-2">
                <div className="box">
                    <div>
                        <img src={Gold} alt='/' style={{marginRight: '1rem'}}/>
                    </div>
                    <div>
                        <h3>WORLD'S LEADING</h3>
                        <p>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
                    </div>

                </div>
                <div className="box">
                    <div>
                        <h3>NO ONE INCLUDE MORE</h3>
                        <p>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
                        <button>View Packages</button>
                    </div>
                </div>
            </div>
            </div>

            <div className="right">
                <div className="promo">
                    <h4 className='save'>GET ADDITIONAL 7% OFF</h4>
                    <p>12 HOURS LEFT!</p>
                    <p className="offer">VIEW ALL CURRENT OFFERS</p>

                </div>
                <form>
                    <div className="input-wrap">
                        <label>Destination</label>
                        <select>
                            <option value="1">Grande Antitank</option>
                            <option value="1">Vietnam</option>
                            <option value="1">Thailand</option>
                            <option value="1">Khmer</option>
                            <option value="1">Nevada</option>
                            <option value="1">Yasuo</option>
                            <option value="1">Vergil</option>
                            <option value="1">Bury the Light</option>
                            <option value="1">Scammer</option>
                        </select>
                    </div>
                    <div className="date">
                        <div className="input-wrap">
                            <label>Check-In</label>
                            <input type='date'/>
                        </div>

                        <div className="input-wrap">
                            <label>Check-Out</label>
                            <input type='date'/>
                        </div>
                    </div>
                    <button>Rate & Scibidi</button>

                </form>
            </div>
        </div>
    </div>
  )
}

export default Search