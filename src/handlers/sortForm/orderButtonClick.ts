function handleNonClickedOrderButton(clickedOrderButton: HTMLButtonElement, activeAttribute: string) {
  const clickedOrderButtonParentElement = clickedOrderButton.parentElement as HTMLDivElement
  const currentActiveOrderButton = clickedOrderButtonParentElement.querySelector(`[${activeAttribute}]`)

  if (currentActiveOrderButton) {
    currentActiveOrderButton.removeAttribute(activeAttribute)
  }
}

function handleButtonsActiveAttribute(targetButton: HTMLButtonElement) {
  const activeAttribute = "data-active"

  handleNonClickedOrderButton(targetButton, activeAttribute)
  targetButton.setAttribute(activeAttribute, "")
}

export function handleOrderButtonClick(event: MouseEvent) {
  const orderButton = event.target as HTMLButtonElement

  handleButtonsActiveAttribute(orderButton)
}