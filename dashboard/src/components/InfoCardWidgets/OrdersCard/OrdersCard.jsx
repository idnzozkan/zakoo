import React, { useEffect, useState } from 'react'
import InfoCardWidget from '../InfoCardWidget'
import Loading from '../../Loading'
import { getIcon, getPrevMonth } from '../utils'
import { userRequest } from '../../../requestMethods'

const OrdersCard = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [numberOfOrders, setNumberOfOrders] = useState([])
    const currentMonthNum = getPrevMonth(0)
    const lastMonthNum = getPrevMonth(1)

    let currentMonth = numberOfOrders.find(item => item._id === currentMonthNum)
    if (!currentMonth) currentMonth = { numberOfOrders: 0 }
    let lastMonth = numberOfOrders.find(item => item._id === lastMonthNum)
    if (!lastMonth) lastMonth = { numberOfOrders: 0 }

    const value = (currentMonth?.numberOfOrders - lastMonth?.numberOfOrders) < 0 ? 0 : currentMonth?.numberOfOrders - lastMonth?.numberOfOrders
    const percentage = Math.floor(value * 100 / lastMonth?.numberOfOrders)
    const icon = getIcon(percentage)

    useEffect(() => {
        setIsLoading(true)
        const getNumberOfOrders = async () => {
            try {
                const res = await userRequest.get('/orders/count')
                setNumberOfOrders(res.data)
            } catch (error) {
                console.log(error)
            }
            setIsLoading(false)
        }

        getNumberOfOrders()
    }, [])

    if (isLoading) return <Loading type="info-card" />

    return <InfoCardWidget title="New Orders" value={value} percentage={`${percentage}%`} icon={icon} description="Compared to last month" />
}

export default OrdersCard
