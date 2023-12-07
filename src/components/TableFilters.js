"use client"

import React from 'react'
import Select from 'react-select'
import { Input } from 'reactstrap'

const TableFilters = () => {
  return (
    <div style={{display:"flex",alignItems:"center"}}>
    <div style={{display:"flex",alignItems:"center"}}>
     <p className='tbl-filter-lbl'>Difficulty:</p>
    <Select className='tbl-filter-comp' />

    </div>
    <div style={{display:"flex",alignItems:"center"}}>
    <p className='tbl-filter-lbl'>Category:</p>
    <Select className='tbl-filter-comp' />

    </div>
    <div style={{display:"flex",alignItems:"center"}}>
    <p className='tbl-filter-lbl'>Search:</p>

    <Input className='tbl-filter-comp' placeholder="Search problems" />

    </div>

    </div>
  )
}

export default TableFilters