import React from 'react'
import './dashboard.css'
import { routes } from '../../../assets/data/webRoutes'
import DashboardCards from './subcomponents/DashboardCards'

function Dashboard() {


    const cardsMap = routes.map((r, key) => {
        if(r.inDashboard){
            return(
                <DashboardCards 
                    key={key}
                    src={r.imgSrc} 
                    alt={r.label + " game preview image."}
                    cardLabel={r.label}/>
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