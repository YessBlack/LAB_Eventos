import { CardItem } from './components/CardItem.js'
import { listTurn } from './data.js'

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

  renderTickets()
}

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

  renderTickets()
  renderWaitingCall()
  renderCurrentTicket()
  renderCounterTickets()
}

const ticketList = document.getElementById('fila__lista')
const btnLlamar = document.getElementById('btnLlamar')

ticketList.addEventListener('click', (event) => {
  if (event.target.classList.contains('ticketBtn')) {
    const id = event.target.dataset.id
    handleCancel(id)
  }
})

btnLlamar.addEventListener('click', () => handleAdd())

const renderTickets = () => {
  const ticketList = document.getElementById('fila__lista')
  const ticketsEmpty = document.getElementById('mensajeVacio')

  if (listTurn.length > 0) {
    ticketsEmpty.style.display = 'none'
  }

  ticketList.innerHTML = listTurn.map(ticket => CardItem(ticket)).join('')

  renderCounterTickets()
  renderWaitingCall()
}

const renderCounterTickets = () => {
  const conteo = document.getElementById('conteo__cifra')
  const waiting = listTurn.filter(item => item.statusClass === 'waiting')
  conteo.innerHTML = waiting.length
}

const renderCurrentTicket = () => {
  const ticketInProgress = listTurn.find(ticket => ticket.statusClass === 'inProgress')

  const currentTicket = document.getElementById('visor__numero')
  currentTicket.innerHTML = ticketInProgress ? ticketInProgress.id : '-'
}

const renderWaitingCall = () => {
  const nextTicket = listTurn.find(ticket => ticket.statusClass === 'waiting')
  const waiting = document.getElementById('waiting')
  waiting.innerHTML = nextTicket ? nextTicket.id : '-'
}

const renderSearch = () => {
  const inputSearch = document.querySelector('.panel__input')
  const sectionResults = document.querySelector('.results')

  inputSearch.addEventListener('input', (event) => {
    const value = event.target.value.trim()

    if (value === '') {
      sectionResults.innerHTML = ''
      return
    }

    const searchElements = listTurn.filter(ticket => {
      const idMatch = String(ticket.id).toLowerCase().includes(value.toLowerCase())
      return idMatch
    })

    sectionResults.classList.add('results--visible')

    if (searchElements.length === 0) {
      sectionResults.innerHTML = '<span class="results__empty">Sin resultados</span>'
      return
    }

    sectionResults.innerHTML = searchElements.map(el => {
      return CardItem(el, false)
    }).join('')
  })
}

renderTickets()
renderCounterTickets()
renderCurrentTicket()
renderWaitingCall()
renderSearch()