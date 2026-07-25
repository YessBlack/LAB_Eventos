import { listTurn } from '../data/data.js'
import { CardItem } from '../components/CardItem.js'

export const Search = () => {
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
