import { CardItem } from '../components/CardItem.js'
import { listTurn } from '../data/data.js'
import { renderApp } from './render.js'

const ticketList = document.getElementById('fila__lista')
const ticketsEmpty = document.getElementById('mensajeVacio')

const handleCancel = (id) => {
  const index = listTurn.findIndex(ticket => ticket.id === id)

  if (index === -1) {
    alert('No hemos encontrado ese Ticket')
    return
  }

  listTurn[index] = {
    ...listTurn[index],
    status: 'Cancelado',
    statusClass: 'cancelled'
  }

  renderApp()
}

ticketList.addEventListener('click', (event) => {
  if (event.target.classList.contains('ticketBtn')) {
    const id = event.target.dataset.id
    handleCancel(id)
  }
})

export const TicketList = () => {
  if (listTurn.length > 0) {
    ticketsEmpty.style.display = 'none'
  }

  ticketList.innerHTML = listTurn.map(ticket => CardItem(ticket)).join('')
}
