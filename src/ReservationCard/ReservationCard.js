import React from 'react'
import './ReservationCard.css'

const ReservationCard = (props) => {
  const { name, date, time, number } = props.data
  return (
    <article className="resv-card">
      <h1>{ name }</h1>
      <p>Reserved On { date }</p>
      <p> at { time } pm</p>
      <p>{ number } guest(s)</p>
      <button>Cancel</button>
    </article>
  )
}

export default ReservationCard