import React from 'react'
import PropTypes from 'prop-types'
import ReactTable from "react-table"
import './dataTable.css';

export const DataTable = (props) => {
  return (
    <ReactTable
      data={props.data}
      columns={props.columns}
      {...props}
    />
  )
}
DataTable.propTypes = {
  data: PropTypes.array,
  columns: PropTypes.array
}