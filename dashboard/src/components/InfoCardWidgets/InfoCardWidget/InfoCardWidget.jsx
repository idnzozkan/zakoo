import React from 'react'
import './info-card-widget.scss'

const InfoCardWidget = ({ title, value, percentage, icon, description }) => {
    return (
        <div className='info-card-container'>
            <span className="info-card-title">{title}</span>
            <div className="info-card-value-container">
                <span className='info-card-value'>{value}</span>
                {
                    !percentage.startsWith('0') ?
                        <span className={`info-card-percentage ${percentage.startsWith('-') ? 'negative' : 'positive'}`}>{percentage}
                            {icon}
                        </span>
                        : ''
                }
            </div>
            <span className="info-card-description">{description}</span>
        </div>
    )
}

export default InfoCardWidget
