import React from 'react'
import './list-widgets.scss'
import SmallWidget from './SmallWidget'
import LargeWidget from './LargeWidget'

const ListWidgets = () => {
    return (
        <div className="list-widgets">
            <SmallWidget />
            <LargeWidget />
        </div>
    )
}

export default ListWidgets
