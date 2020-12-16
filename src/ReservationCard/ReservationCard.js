import React from 'react'
import './ReservationCard.css'

const ReservationCard = (props) => {
  console.log(props.data);
  const { name, date, time, number } = props.data
  return (
    <article className="resv-card">
      <h1>{ name }</h1>
      <p>{ date }</p>
      <p>{ time }</p>
      <p>{ number }</p>
    </article>
  )
}

export default ReservationCard