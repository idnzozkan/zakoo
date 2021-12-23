import React from 'react'
import './chart.scss'
import { AreaChart, XAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area } from 'recharts'

const Chart = ({ title, data, xAxisDataKey, dataKey }) => {
    return (
        <div className='chart-container'>
            <h3 className='chart-title'>{title}</h3>
            <div className='chart'>
                <ResponsiveContainer width='100%' aspect={4 / 1}>
                    <AreaChart data={data}>
                        <defs>
                            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#1943e6" stopOpacity={0.6} />
                                <stop offset="95%" stopColor="#1943e6" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <XAxis dataKey={xAxisDataKey} stroke="#3d4d88" />
                        <Area type="monotone" dataKey={dataKey} stroke="#1943e6" fillOpacity={1} fill="url(#colorUv)" />
                        <Tooltip />
                        <CartesianGrid stroke="#e5e6f0" strokeDasharray="3 3" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default Chart
