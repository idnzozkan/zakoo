import React, { useEffect, useState } from 'react'
import InfoCardWidget from '../InfoCardWidget'
import Loading from '../../Loading'
import { getIcon, getPrevMonth } from '../utils'
import { userRequest } from '../../../requestMethods'

const RevenueCard = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [income, setIncome] = useState([])
    const currentMonthNum = getPrevMonth(0)
    const lastMonthNum = getPrevMonth(1)

    let currentMonth = income.find(item => item._id === currentMonthNum)
    if (!currentMonth) currentMonth = { totalIncome: 0 }
    let lastMonth = income.find(item => item._id === lastMonthNum)
    if (!lastMonth) lastMonth = { totalIncome: 0 }

    const value = currentMonth?.totalIncome - lastMonth?.totalIncome
    const percentage = Math.floor(value * 100 / lastMonth?.totalIncome)
    const icon = getIcon(percentage)

    useEffect(() => {
        setIsLoading(true)
        const getIncome = async () => {
            try {
                const res = await userRequest.get('/orders/income')
                setIncome(res.data)
            } catch (error) {
                console.log(error)
            }
            setIsLoading(false)
        }

        getIncome()
    }, [])

    if (isLoading) return <Loading type="info-card" />

    return <InfoCardWidget title="Revenue" value={`$ ${value}`} percentage={`${percentage}%`} icon={icon} description="Compared to last month" />
}

export default RevenueCard
