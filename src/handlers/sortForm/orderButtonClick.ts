import { getStorageSortParameters } from "@controllers/storage/getSortParameters"
import { setStorageSortParameters } from "@controllers/storage/setSortParameters"
import type { SortOrder, SortParams } from "@types"

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

  const sortAttribute = "data-order"
  const storageSortParameters = getStorageSortParameters() as SortParams
  setStorageSortParameters({
    type: storageSortParameters.type,
    order: orderButton.getAttribute(sortAttribute) as SortOrder
  })

}