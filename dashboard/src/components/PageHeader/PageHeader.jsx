import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './page-header.scss'
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined'

const Button = ({ btnType, btnPath }) => {
    const navigate = useNavigate()

    if (btnType === 'new') return (
        <Link to={btnPath}>
            <button className='header-btn header-btn-new'>New</button>
        </Link>
    )

    if (btnType === 'back') return <button className='header-btn header-btn-back' onClick={() => navigate(-1)}><ArrowBackIosOutlinedIcon /> Back</button>
}

const PageHeader = ({ title, btnPath, btnType }) => {
    return (
        <div className="page-header">
            <h1>{title}</h1>
            <Button btnType={btnType} btnPath={btnPath} />
        </div >
    )
}

export default PageHeader
