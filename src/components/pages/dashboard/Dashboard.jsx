import React from 'react'
import { routes } from '../../../assets/data/webRoutes'
import { Link } from 'react-router-dom'
import DashboardCards from './subcomponents/DashboardCards'

import './dashboard.css'

function Dashboard() {


    const cardsMap = routes.map((r, key) => {
        if(r.inDashboard){
            return(
                <Link key={key} to={r.path}>
                    <DashboardCards 
                        src={r.imgSrc} 
                        alt={r.label + " game preview image."}
                        cardLabel={r.label}/>
                </Link>
            )
        }
    })

    return (
        <div className='page'>
            <div className='dashboard page-content'>
                <div className="title">
                    <h1><span>X</span>tatic Games</h1>
                </div>
                <div className="dashboard-menu">
                    {cardsMap}
                </div>
            </div>
        </div>
    )
}

export default Dashboard