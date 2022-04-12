import React, { useEffect, useMemo, useState } from 'react'
import MainLayout from '../../layouts/MainLayout'
import InfoCardWidgets from '../../components/InfoCardWidgets'
import Chart from '../../components/Chart'
import ListWidgets from '../../components/ListWidgets'
import { userRequest } from '../../requestMethods'

const Home = () => {
    const [userStats, setUserStats] = useState([])

    const MONTHS = useMemo(() => [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
    ], [])

    useEffect(() => {
        const getStats = async () => {
            try {
                const res = await userRequest.get('/users/stats')

                setUserStats(
                    res.data.map(stat => {
                        return {
                            month: MONTHS[stat._id - 1],
                            'New Customers': stat.total
                        }
                    })
                )
            } catch (error) {
                console.log(error)
            }
        }

        getStats()
    }, [MONTHS])

    return (
        <MainLayout>
            <InfoCardWidgets />
            <Chart title="Customer Analytics" data={userStats} xAxisDataKey="month" dataKey="New Customers" />
            <ListWidgets />
        </MainLayout>
    )
}

export default Home
