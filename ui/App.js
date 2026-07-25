import { CallNext } from './CallNext.js'
import { renderApp } from './render.js'
import { Search } from './Search.js'

export const init = () => {
  renderApp()
  Search()
  CallNext()
}
