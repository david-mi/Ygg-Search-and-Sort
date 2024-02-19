function handleNonClickedOrderButton(clickedOrderButton: HTMLButtonElement, attributeToRemove: string) {
  const clickedOrderButtonParentElement = clickedOrderButton.parentElement as HTMLDivElement
  const currentActiveOrderButton = clickedOrderButtonParentElement.querySelector(`[${attributeToRemove}]`)

  if (currentActiveOrderButton?.contains(clickedOrderButton) === false) {
    currentActiveOrderButton.removeAttribute(attributeToRemove)
  }
}

export function handleOrderButtonClick(event: MouseEvent) {
  const activeAttribute = "data-active"
  const orderButton = event.target as HTMLButtonElement

  handleNonClickedOrderButton(orderButton, activeAttribute)


  orderButton.setAttribute(activeAttribute, "")
}