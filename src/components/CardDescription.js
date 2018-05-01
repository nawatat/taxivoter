import React from 'react'
import { Rate } from 'antd'

const CardDescription = props => (
  <div>
    <p>Rate : { <Rate allowHalf value={props.rate} /> } ( {props.rate} / {props.rateCount} )</p>
    <p>Plate : {props.plate} </p>
    <p>Area : {props.area} </p>
  </div>
)
export default CardDescription
