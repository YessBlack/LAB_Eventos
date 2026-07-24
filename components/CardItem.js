export const CardItem = (item) => {
  const showCancel = item.statusClass === 'waiting'

  return `
    <article class="ticket">
      <div class="ticketHeader">
        <p class="ticketCode">${item.id}</p>
        <div class="ticketInfo">
          <p class="ticketName">${item.name}</p>
          <span class="ticketSubject">${item.subject}</span>
          <span class="ticketModule">${item.module}</span>
        </div>
      </div>
      <div class="ticketActions">
        <div class="ticketStatus ${item.statusClass}">
          <span class="statusLabel">${item.status}</span>
        </div>
<button class="ticketBtn" ${showCancel ? '' : 'style="visibility: hidden"'}>Cancelar</button>        
      </div>
    </article>
  `
}
