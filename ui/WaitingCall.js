import { listTurn } from '../data/data.js'

export const WaitingCall = () => {
  const nextTicket = listTurn.find(ticket => ticket.statusClass === 'waiting')
  const waiting = document.getElementById('waiting')
  waiting.innerHTML = nextTicket ? nextTicket.id : '-'
}
