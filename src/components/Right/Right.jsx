import React from 'react'
import CustomerReview from '../customer/CustomerReview'
import Updates from '../updates/Updates'

import './Right.css'

const Right = () => {
  return (
    <div className='RightSide'>
        <div>
            <h3>Updates</h3>
            <Updates />
        </div>

        <div>
            <h3>Growth Chart</h3>
            <CustomerReview />
        </div>

    </div>
  )
}

export default Right