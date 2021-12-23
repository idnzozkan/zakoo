import React from 'react'
import './info-card-widgets.scss'
import InfoCardWidget from './InfoCardWidget'
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined'
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined'

const InfoCardWidgets = () => {
    const cards = [
        {
            title: 'Total Revenue',
            value: '$ 5.780',
            percentage: '36%',
            icon: <ArrowUpwardOutlinedIcon />,
            description: 'Compared to last month'
        },
        {
            title: 'Orders',
            value: '1.250',
            percentage: '-0.2%',
            icon: <ArrowDownwardOutlinedIcon />,
            description: 'Compared to last month'
        },
        {
            title: 'Customers',
            value: '2.300',
            percentage: '24%',
            icon: <ArrowUpwardOutlinedIcon />,
            description: 'Compared to last month'
        }
    ]

    return (
        <div className='info-card-widgets'>
            {cards.map(c => (<InfoCardWidget card={c} key={c.title} />))}
        </div>
    )
}

export default InfoCardWidgets
