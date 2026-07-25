export const CardItem = (item, showButtonCancel = true) => {
  const showCancel = item.statusClass === 'waiting' && showButtonCancel

  return `
    <article class="ticket ${!showButtonCancel ? 'border' : ''}">
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
        ${showButtonCancel
      ? `<button data-id="${item.id}" class="ticketBtn" ${showCancel ? '' : 'style="visibility: hidden"'}>Cancelar</button>`
      : ''
    }
    </article>
  `
}
