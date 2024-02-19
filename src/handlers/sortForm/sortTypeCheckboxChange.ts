import { sortTypesCheckboxes } from "@views/components/sortFormWrapper/sortForm/sortTypes/sortTypes"
import { getStorageSortParameters } from "@controllers/storage/getSortParameters"
import { setStorageSortParameters } from "@controllers/storage/setSortParameters"
import type { SortType } from "types"
import { orderButtons } from "@views/components/sortFormWrapper/sortForm/sortOrder/sortOrder"

function uncheckNonTargetCheckboxes(targetCheckbox: HTMLInputElement) {
  sortTypesCheckboxes.forEach((sortTypesCheckbox) => {
    if (sortTypesCheckbox.contains(targetCheckbox) === false) {
      sortTypesCheckbox.checked = false
    }
  })
}

function handleOrderButtonsDisplay() {
  const haveTypeSelected = sortTypesCheckboxes.some((sortTypeCheckbox) => sortTypeCheckbox.checked)
  orderButtons.forEach((orderButton) => orderButton.disabled = !haveTypeSelected)
}

export function handleSortTypeCheckboxChange(event: Event) {
  const targetCheckbox = event.target as HTMLInputElement
  uncheckNonTargetCheckboxes(targetCheckbox)
  handleOrderButtonsDisplay()

  const storageSortParameters = getStorageSortParameters()
  setStorageSortParameters({
    type: targetCheckbox.value as SortType,
    order: storageSortParameters !== null ? storageSortParameters.order : "desc"
  })
}