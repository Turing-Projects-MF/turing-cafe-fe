import React from 'react'
import './ReservationCard.css'

const ReservationCard = (props) => {
  const { name, date, time, number, id } = props.data
  return (
    <article className="resv-card">
      <h1>{ name }</h1>
      <p>Reserved On { date }</p>
      <p> at { time } pm</p>
      <p>{ number } guest(s)</p>
      <button onClick={ () => props.delete(id) }>Cancel</button>
    </article>
  )
}

export default ReservationCard