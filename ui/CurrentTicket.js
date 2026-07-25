import { listTurn } from "../data/data.js"

export const CurrentTicket = () => {
  const ticketInProgress = listTurn.find(ticket => ticket.statusClass === 'inProgress')

  const currentTicket = document.getElementById('visor__numero')
  currentTicket.innerHTML = ticketInProgress ? ticketInProgress.id : '-'
}
