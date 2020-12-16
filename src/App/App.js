import React, { Component } from 'react';
import './App.css';
import ReservationCard from '../ReservationCard/ReservationCard'
import Form from '../Form/Form'
import { callApi, postApi, deleteApi } from '../apiCalls'

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: []
    }
  }

  componentDidMount() {
    callApi()
      .then(data => this.setState({ reservations: data }))
      .catch(error => console.log(error))
  }

  createReservationCards = () => {
    return this.state.reservations.map((reservation, index) => {
      return <ReservationCard
        key={ index }
        data={ reservation }
        delete={ this.cancelReservation }
      />
    })
  }

  addReservation = (newReservation) => {
    this.setState({ reservations: [...this.state.reservations, newReservation] })
    postApi(newReservation)
  }

  cancelReservation = (reservationId) => {
    deleteApi(reservationId)
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
