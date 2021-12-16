import React from 'react'
import './content.scss'

const Content = ({ children }) => {
    return (
        <div className='content'>
            {children}
        </div>
    )
}

export default Content
