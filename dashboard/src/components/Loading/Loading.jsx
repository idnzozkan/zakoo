import React from 'react'
import './loading.scss'

const Loading = ({ type }) => {
    if (type === 'info-card') {
        return (
            <div className="info-card-loading-container">
            </div>
        )
    }
}

export default Loading
