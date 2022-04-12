import React from 'react'
import './loading.scss'

const Loading = ({ type }) => {
    if (type === 'info-card') {
        return (
            <div className="info-card-loading-container skeleton">
            </div>
        )
    }

    if (type === 'customer-card') {
        return (
            <div className="customer-card-loading-container skeleton">
                <div className='customer-card-loading-title' />
                <div className="customer-card-loading-wrapper">
                    <div className="customer-card-loading-info">
                        <div className="customer-card-loading-text"></div>
                        <div className="customer-card-loading-text"></div>
                        <div className="customer-card-loading-text"></div>
                        <div className="customer-card-loading-text"></div>
                        <div className="customer-card-loading-text"></div>
                    </div>
                    <div className="customer-card-loading-image">
                        <div className="customer-card-loading-img" />
                    </div>
                </div>
            </div>
        )
    }
}

export default Loading
