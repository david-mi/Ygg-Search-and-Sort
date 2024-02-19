import { sortTypesCheckboxes } from "@views/components/sortFormWrapper/sortForm/sortTypes/sortTypes"
import type { SortType } from "types"
import { orderButtons } from "@views/components/sortFormWrapper/sortForm/sortOrder/sortOrder"
import { Store } from "@controllers/store"

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

  Store.setData(
    "sortParams",
    targetCheckbox.checked
      ? {
        type: targetCheckbox.value as SortType,
        order: Store.sortParams?.order || "desc"
      }
      : null
  )
}