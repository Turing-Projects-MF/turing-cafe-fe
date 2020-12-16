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
      return <ReservationCard data={ reservation } />
    })
  }

  render() {

    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form />
        </div>
        <div className='resy-container'>
          { this.createReservationCards() }
        </div>
      </div>
    )
  }
}

export default App;
