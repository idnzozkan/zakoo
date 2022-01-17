import { useEffect, useState } from 'react'
import './large-widget.scss'
import { userRequest } from '../../../requestMethods'
import moment from 'moment'
import { Link } from 'react-router-dom'
import Status from '../../Status'

const LargeWidget = () => {
    const [newOrders, setNewOrders] = useState()

    useEffect(() => {
        const fetchLatestOrders = async () => {
            try {
                const res = await userRequest.get('/orders?new=true')
                setNewOrders(res.data)
            } catch (error) {
                console.log(error)
            }
        }

        fetchLatestOrders()
    }, [])

    return (
        <div className='large-widget'>
            <h3 className='list-widget-title'>Latest Orders</h3>
            <table className="lg-widget-table">
                <thead>
                    <tr>
                        <th className='lg-widget-table-head'>Customer</th>
                        <th className='lg-widget-table-head'>Date</th>
                        <th className='lg-widget-table-head'>Amount</th>
                        <th className='lg-widget-table-head'>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {newOrders?.map(o => (
                        <tr className='lg-widget-table-row' key={o._id}>
                            <td className='lg-widget-table-customer'>
                                <Link to={`/customers/${o.userId._id}`}>
                                    <img src={o.userId.image || 'https://immersivelrn.org/wp-content/uploads/no_avatar.jpg'} alt="Customer Avatar" />
                                </Link>
                                {o.userId.username}
                            </td>
                            <td className='lg-widget-table-date'>{moment(o.createdAt).format('MM-DD-yyyy')}</td>
                            <td className='lg-widget-table-amount'>${o.amount}</td>
                            <td className='lg-widget-table-status'>
                                <Status type={o.status} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default LargeWidget
