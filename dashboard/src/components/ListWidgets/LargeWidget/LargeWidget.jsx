import React from 'react'
import './large-widget.scss'

const LargeWidget = () => {

    const Status = ({ type }) => <div className={`status ${type}`}>{type}</div>

    return (
        <div className='large-widget'>
            <h3 className='list-widget-title'>Latest Transactions</h3>
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
                    <tr className='lg-widget-table-row'>
                        <td className='lg-widget-table-customer'>
                            <img src="https://randomuser.me/api/portraits/men/60.jpg" alt="Customer Avatar" />
                            Lance M. Wilson
                        </td>
                        <td className='lg-widget-table-date'>2021-12-17</td>
                        <td className='lg-widget-table-amount'>$300.00</td>
                        <td className='lg-widget-table-status'>
                            <Status type="succeed" />
                        </td>
                    </tr>
                    <tr className='lg-widget-table-row'>
                        <td className='lg-widget-table-customer'>
                            <img src="https://randomuser.me/api/portraits/women/60.jpg" alt="Customer Avatar" />
                            Dora Dorsey
                        </td>
                        <td className='lg-widget-table-date'>2021-12-17</td>
                        <td className='lg-widget-table-amount'>$300.00</td>
                        <td className='lg-widget-table-status'>
                            <Status type="succeed" />
                        </td>
                    </tr>
                    <tr className='lg-widget-table-row'>
                        <td className='lg-widget-table-customer'>
                            <img src="https://randomuser.me/api/portraits/men/61.jpg" alt="Customer Avatar" />
                            James Jackson
                        </td>
                        <td className='lg-widget-table-date'>2021-12-17</td>
                        <td className='lg-widget-table-amount'>$300.00</td>
                        <td className='lg-widget-table-status'>
                            <Status type="pending" />
                        </td>
                    </tr>
                    <tr className='lg-widget-table-row'>
                        <td className='lg-widget-table-customer'>
                            <img src="https://randomuser.me/api/portraits/women/61.jpg" alt="Customer Avatar" />
                            Cori C. Wheeler
                        </td>
                        <td className='lg-widget-table-date'>2021-12-17</td>
                        <td className='lg-widget-table-amount'>$300.00</td>
                        <td className='lg-widget-table-status'>
                            <Status type="succeed" />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default LargeWidget
