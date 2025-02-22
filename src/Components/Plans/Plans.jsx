import React from 'react'
import './Plans.css'
import { plansData } from '../../data/plansData'
import whiteTick from '../../assets/whiteTick.png'
const Plans = () => {
    return (
        <div className='plans-container'>
            <div className="programs-header" style={{ gap: '2rem' }}>
                <span className='stroke-text'>Choose plans to</span>
                <span>Start your journey</span>
                <span className='stroke-text'>with us</span>
            </div>

            <div className='plans' id='Plans'>
                {plansData.map((plan, i) => (
                    <div className='plan' key={i}>
                        {plan.icon}
                        <span>{plan.name}</span>
                        <span>${plan.price}</span>

                        <div className="features">
                            {plan.features.map((feature, i) => (
                                <div className="feature">
                                    <img src={whiteTick} alt="" />
                                    <span key={i}>{feature}</span>
                                </div>
                            ))}
                        </div>
                        <div>
                            <span>See more details-</span>
                        </div>
                        <button className='btn'>Join Now</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Plans