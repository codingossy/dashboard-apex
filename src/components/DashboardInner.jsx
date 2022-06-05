import React from 'react'
import '../styles/DashboardInner.css'
import Cards from './Cards/Cards'
import Table from './table/Table'

const DashboardInner = () => {
  return (
    <div className='Dashboard'>
            <h1>Dashboard Overview</h1>

            <Cards />
            <Table />
    </div>
  )
}

export default DashboardInner