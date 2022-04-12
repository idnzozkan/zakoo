import React, { useEffect, useState } from 'react'
import './customer-detail.scss'
import MainLayout from '../../layouts/MainLayout'
import DetailCardSm from '../../components/DetailCardSm'
import DetailCardLg from '../../components/DetailCardLg'
import PageHeader from '../../components/PageHeader/PageHeader'
import { useLocation } from 'react-router-dom'
import { getUser } from '../../store/apiRequests'

const CustomerDetail = () => {
    const { pathname } = useLocation()
    const userId = pathname.split('/')[2]
    const [isUpdated, setIsUpdated] = useState(false)
    const [user, setUser] = useState(null)

    useEffect(() => {
        const getProductData = async () => {
            try {
                const user = await getUser(userId)
                setUser(user)
                setIsUpdated(false)
            } catch (error) {
                console.log(error)
            }
        }

        getProductData()
    }, [isUpdated])

    console.log(user)

    return (
        <MainLayout>
            <PageHeader title='Edit User' btnType='back' />
            {!user ? <h2>Loading...</h2> : (
                <div className="customer-detail-wrapper">
                    <DetailCardSm user={user} />
                    <DetailCardLg user={user} setIsUpdated={setIsUpdated} />
                </div>
            )}
        </MainLayout>
    )
}

export default CustomerDetail
