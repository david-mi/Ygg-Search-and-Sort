import { Store } from "@controllers/store"
import type { SortOrder } from "@types"
import { SORT_BUTTON_DATA_ATTRIBUTES } from "@views/constants"

function handleNonClickedOrderButton(clickedOrderButton: HTMLButtonElement) {
  const clickedOrderButtonParentElement = clickedOrderButton.parentElement as HTMLDivElement
  const currentActiveOrderButton = clickedOrderButtonParentElement.querySelector(`[${SORT_BUTTON_DATA_ATTRIBUTES.ACTIVE}]`)

  if (currentActiveOrderButton) {
    currentActiveOrderButton.removeAttribute(SORT_BUTTON_DATA_ATTRIBUTES.ACTIVE)
  }
}

function handleButtonsActiveAttribute(targetButton: HTMLButtonElement) {
  handleNonClickedOrderButton(targetButton)
  targetButton.setAttribute(SORT_BUTTON_DATA_ATTRIBUTES.ACTIVE, "")
}

export function handleOrderButtonClick(event: MouseEvent) {
  const orderButton = event.target as HTMLButtonElement

  handleButtonsActiveAttribute(orderButton)

  Store.setData("sortParams", {
    type: Store.sortParams!.type,
    order: orderButton.getAttribute(SORT_BUTTON_DATA_ATTRIBUTES.ORDER) as SortOrder
  })
}