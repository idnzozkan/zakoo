import React, { useEffect, useState } from 'react'
import InfoCardWidget from '../InfoCardWidget'
import { getIcon, getPrevMonth } from '../utils'
import { userRequest } from '../../../requestMethods'
import Loading from '../../Loading'

const CustomersCard = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [numberOfCustomers, setNumberOfCustomers] = useState([])
    const currentMonthNum = getPrevMonth(0)
    const lastMonthNum = getPrevMonth(1)

    let currentMonth = numberOfCustomers.find(item => item._id === currentMonthNum)
    if (!currentMonth) currentMonth = { total: 0 }
    let lastMonth = numberOfCustomers.find(item => item._id === lastMonthNum)
    if (!lastMonth) lastMonth = { total: 0 }

    const value = (currentMonth?.total - lastMonth?.total) < 0 ? 0 : currentMonth?.total - lastMonth?.total
    const percentage = isNaN(Math.floor(value * 100 / lastMonth?.total)) ? 0 : Math.floor(value * 100 / lastMonth?.total)
    const icon = getIcon(percentage)

    console.log(lastMonth?.total)

    useEffect(() => {
        setIsLoading(true)
        const getNumberOfCustomers = async () => {
            try {
                const res = await userRequest.get('/users/stats')
                setNumberOfCustomers(res.data)
            } catch (error) {
                console.log(error)
            }
            setIsLoading(false)
        }

        getNumberOfCustomers()
    }, [])

    if (isLoading) return <Loading type="info-card" />

    return <InfoCardWidget title="New Customers" value={value} percentage={`${percentage}%`} icon={icon} description="Compared to last month" />
}

export default CustomersCard
