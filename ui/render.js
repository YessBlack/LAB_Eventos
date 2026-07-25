import { TicketList } from './TicketList.js'
import { CounterTickets } from './CounterTickets.js'
import { CurrentTicket } from './CurrentTicket.js'
import { WaitingCall } from './WaitingCall.js'

export const renderApp = () => {
  TicketList()
  CounterTickets()
  CurrentTicket()
  WaitingCall()
}
