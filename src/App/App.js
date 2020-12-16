import React, { Component } from 'react';
import './App.css';
import ReservationCard from '../ReservationCard/ReservationCard'
import Form from '../Form/Form'

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/v1/reservations')
      .then(response => response.json())
      .then(data => this.setState({ reservations: data }))
      .catch(error => console.log(error))
  }

  createReservationCards = () => {
    return this.state.reservations.map(reservation => {
      return <ReservationCard
        key={ reservation.id }
        data={ reservation }
        delete={ this.cancelReservation }
      />
    })
  }

  addReservation = (newReservation) => {
    this.setState({ reservations: [...this.state.reservations, newReservation] })
    fetch('http://localhost:3001/api/v1/reservations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newReservation)
    })
      .then(response => response.json())
  }

  cancelReservation = (reservationId) => {
    fetch(`http://localhost:3001/api/v1/reservations/${ reservationId }`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
    const updatedReservations = this.state.reservations.filter(reservation => {
      return reservation.id !== reservationId
    })
    this.setState({ reservations: updatedReservations })
  }

  render() {

    return (
      <div className="App" >
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form addReservation={ this.addReservation } />
        </div>
        <div className='resy-container'>
          { this.createReservationCards() }
        </div>
      </div>
    )
  }
}

export default App;
