const callApi = () => {
  return fetch('http://localhost:3001/api/v1/reservations')
    .then(response => response.json())
}

const postApi = (reservation) => {
  fetch('http://localhost:3001/api/v1/reservations', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(reservation)
  })
    .then(response => response.json())
}

const deleteApi = (id) => {
  fetch(`http://localhost:3001/api/v1/reservations/${ id }`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.json())
}

export {
  callApi,
  postApi,
  deleteApi
}
