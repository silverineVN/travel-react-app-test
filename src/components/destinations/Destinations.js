import React from 'react'
import './DestinationsStyles.css'

import hinh1 from '../../assets/hinh1.jpg'
import hinh2 from '../../assets/hinh2.jpg'
import hinh3 from '../../assets/hinh3.jpg'
import hinh4 from '../../assets/hinh4.jpg'
import hinh5 from '../../assets/hinh5.jpg'

function Destinations() {
  return (
    <div className='destinations'>
        <div className='container'>
            <h1>All-include Resort</h1>
            <p>On the Carribean's Best Beaches</p>
            <div className="img-container">
                <img className='span-3 image-grid-rơw-2' src={hinh1} alt="/" />
                <img src={hinh2} alt="/" />
                <img src={hinh3} alt="/" />
                <img src={hinh4} alt="/" />
                <img src={hinh5} alt="/" />

            </div>
        </div>
    </div>
  )
}

export default Destinations