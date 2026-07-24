import { CardItem } from './components/CardItem.js'
import { listTurn } from './data.js'

const renderTickets = () => {
  const ticketList = document.getElementById('fila__lista')
  const ticketsEmpty = document.getElementById('mensajeVacio')

  if (listTurn.length > 0) {
    ticketsEmpty.style.display = 'none'
  }

  ticketList.innerHTML = listTurn.map(ticket => CardItem(ticket)).join('')

}

renderTickets()
