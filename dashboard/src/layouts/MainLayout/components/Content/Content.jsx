import React from 'react'
import './content.scss'

const Content = ({ children }) => {
    return (
        <div className='content'>
            <div className='content-wrapper'>
                {children}
            </div>
        </div>
    )
}

export default Content
