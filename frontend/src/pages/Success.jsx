import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useLocation, Navigate } from 'react-router'
import MainLayout from '../layouts/MainLayout'
import { userRequest } from '../requestMethods'

const Success = () => {
    const data = useLocation().state // specific data object for the current route
    const id = useSelector(state => state.reducer.user.loggedInUser?._id)

    useEffect(() => {
        const createOrder = async () => {
            try {
                const res = await userRequest.post(`/orders/${id}`, {
                    products: data?.orderData.products.map(p => ({
                        productId: p._id,
                        quantity: p.quantity
                    })),
                    amount: data?.orderData.totalPrice,
                    address: data?.stripeData.billing_details.address,
                    paymentId: data?.stripeData.id
                })
                console.log(res.data)
            } catch (error) {
                console.log(error)
            }
        }

        data && createOrder()
    }, [id, data])

    if (!data) return <Navigate to="/" />

    return (
        <MainLayout>
            Checkout is Successful!
        </MainLayout>
    )
}

export default Success
