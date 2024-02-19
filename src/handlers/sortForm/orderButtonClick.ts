import { getStorageSortParameters } from "@controllers/storage/getSortParameters"
import { setStorageSortParameters } from "@controllers/storage/setSortParameters"
import type { SortOrder, SortParams } from "@types"
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

  const storageSortParameters = getStorageSortParameters() as SortParams
  setStorageSortParameters({
    type: storageSortParameters.type,
    order: orderButton.getAttribute(SORT_BUTTON_DATA_ATTRIBUTES.ORDER) as SortOrder
  })

}