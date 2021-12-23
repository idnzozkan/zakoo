import React from 'react'
import './info-card-widget.scss'

const InfoCardWidget = ({ card }) => {
    return (
        <div className='info-card-container'>
            <span className="info-card-title">{card.title}</span>
            <div className="info-card-value-container">
                <span className='info-card-value'>{card.value}</span>
                <span className={`info-card-percentage ${card.percentage.startsWith('-') ? 'negative' : 'positive'}`}>{card.percentage}
                    {card.icon}
                </span>
            </div>
            <span className="info-card-description">{card.description}</span>
        </div>
    )
}

export default InfoCardWidget
