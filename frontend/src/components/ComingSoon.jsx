import React from 'react'

import "../styles/ComingSoon.css"
import { Link } from "react-router-dom"
const ComingSoon = () => {
    return (
        <div className='coming'>
            <h1>Working in progress</h1>

            <p>
                this page is currently under development.
            </p>

            <p>
                please check back later.
            </p>

            <Link to="/" className="back-btn"
            >Bcak to Home</Link>

        </div>
    )
}

export default ComingSoon
