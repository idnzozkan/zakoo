import React, { useEffect, useState } from 'react'
import './order-detail.scss'
import { Link, useLocation } from 'react-router-dom'
import moment from 'moment'
import { userRequest } from '../../requestMethods'
import MainLayout from '../../layouts/MainLayout'
import PageHeader from '../../components/PageHeader'

const OrderDetail = () => {
    const [order, setOrder] = useState({})
    const { pathname } = useLocation()

    useEffect(() => {
        const getOrder = async () => {
            const res = await userRequest.get(`/orders/${pathname.split('/')[2]}`)
            setOrder(res.data)
        }

        getOrder()
    }, [pathname])

    console.log(order)

    return (
        <MainLayout>
            <PageHeader title="Edit Order" btnType="back" />
            <div className="order-details">
                <div className='order-items'>
                    <h3 className='order-details-widget-title'>Order Items</h3>
                    <table className="order-items-table">
                        <thead>
                            <tr>
                                <th className='order-items-table-head'>Product</th>
                                <th className='order-items-table-head'>Price</th>
                                <th className='order-items-table-head'>Quantity</th>
                                <th className='order-items-table-head'>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {order?.products?.map(item => (
                                <tr className='order-items-table-row' key={item.productId._id}>
                                    <td className='order-items-table-customer'>
                                        <Link to={`/products/${item.productId._id}`}>
                                            <img src={item.productId.image} alt="Product" />
                                        </Link>
                                        {item.productId.title}
                                    </td>
                                    <td className='order-items-table-price'>${item.productId.price}</td>
                                    <td className='order-items-table-quantity'>{item.quantity}</td>
                                    <td className='order-items-table-total'>
                                        ${item.productId.price * item.quantity}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colSpan={2}></td>
                                <td className='order-items-table-foot'>Total:</td>
                                <td className='order-items-table-foot'>${order?.amount}</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
                <div className="order-details-column-widgets">
                    <div className="order-details-customer">
                        <h3 className='order-details-widget-title'>Customer</h3>
                        <div className="order-details-customer-wrapper">
                            <div className="order-details-customer-info">
                                <p>{order?.userId?.username}</p>
                                <p>{order?.address?.line1}</p>
                                <p>{order?.address?.line2}</p>
                                <p>{order?.address?.city}, {order?.address?.state} {order?.address?.postal_code}</p>
                                <p>{order?.address?.country}</p>
                                <a href={`mailto:${order?.userId?.email}`} title='Customer Email Address'>
                                    <p>{order?.userId?.email}</p>
                                </a>
                            </div>
                            <div className="order-details-customer-image">
                                <img src={order?.userId?.image || 'https://immersivelrn.org/wp-content/uploads/no_avatar.jpg'} alt="Customer" />
                            </div>
                        </div>
                    </div>
                    <div className="order-details-info">
                        <h3 className='order-details-widget-title'>Order Details</h3>
                        <div className="order-details-info-wrapper">
                            <div className="order-details-info-item">
                                <p className="order-details-info-item-title">Order ID:</p>
                                <p>{order?._id}</p>
                            </div>
                            <div className="order-details-info-item">
                                <p className="order-details-info-item-title">Order Status:</p>
                                <form>
                                    <select name="order-status" id="order-status">
                                        {order?.status === 'pending' ? (
                                            <>
                                                <option value="pending" selected>Pending</option>
                                                <option value="pending">Completed</option>
                                            </>
                                        ) : (
                                            <>
                                                <option value="pending">Pending</option>
                                                <option value="pending" selected>Completed</option>
                                            </>
                                        )}
                                    </select>
                                    <button>Update</button>
                                </form>
                            </div>
                            <div className="order-details-info-item">
                                <p className="order-details-info-item-title">Order Date:</p>
                                <p>{moment(order?.createdAt).format("MMMM D YYYY, h:mm:ss a")}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}

export default OrderDetail
