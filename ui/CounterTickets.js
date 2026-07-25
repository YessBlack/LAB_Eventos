import { listTurn } from "../data/data.js"

export const CounterTickets = () => {
  const conteo = document.getElementById('conteo__cifra')
  const waiting = listTurn.filter(item => item.statusClass === 'waiting')
  conteo.innerHTML = waiting.length
}
