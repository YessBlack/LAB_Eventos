import { listTurn } from "../data/data.js"
import { renderApp } from "./render.js"

const handleAdd = () => {
  const item = listTurn.find(ticket => ticket.statusClass === 'waiting')

  if (!item) {
    alert('No hay más turnos pendientes')
    return
  }

  const index = listTurn.findIndex(ticket => ticket.id === item.id)

  const ticketEnded = listTurn.find(ticket => ticket.statusClass === 'inProgress')

  if (ticketEnded) {
    const indexInProgress = listTurn.findIndex(ticket => ticket.id === ticketEnded.id)

    if (indexInProgress === -1) {
      alert('Ocurrio un error')
      return
    }

    listTurn[indexInProgress] = {
      ...listTurn[indexInProgress],
      status: 'Atendido',
      statusClass: 'done'
    }
  }

  listTurn[index] = {
    ...listTurn[index],
    status: 'En Proceso',
    statusClass: 'inProgress'
  }

  renderApp()
}

export const CallNext = () => {
  const btnLlamar = document.getElementById('btnLlamar')
  btnLlamar.addEventListener('click', () => handleAdd())
}
