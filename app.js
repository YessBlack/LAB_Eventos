import { CardItem } from './components/CardItem.js'
import { listTurn } from './data.js'

function handleCancel(id) {
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

  renderTickets()
}

const renderTickets = () => {
  const ticketList = document.getElementById('fila__lista')
  const ticketsEmpty = document.getElementById('mensajeVacio')

  if (listTurn.length > 0) {
    ticketsEmpty.style.display = 'none'
  }

  ticketList.innerHTML = listTurn.map(ticket => CardItem(ticket)).join('')

  ticketList.addEventListener('click', (event) => {
    if (event.target.classList.contains('ticketBtn')) {
      const id = event.target.dataset.id
      handleCancel(id)
    }
  })
}

const counterTickets = () => {
  const conteo = document.getElementById('conteo__cifra')
  const waiting = listTurn.filter(item => item.statusClass === 'waiting')
  conteo.innerHTML = waiting.length
}

renderTickets()
counterTickets()