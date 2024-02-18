import { sortTypesCheckboxes } from "@views/components/sortFormWrapper/sortForm/sortTypes/sortTypes"
import { getStorageSortParameters } from "@controllers/storage/getSortParameters"
import { setStorageSortParameters } from "@controllers/storage/setSortParameters"
import type { SortType } from "types"

function uncheckNonTargetCheckboxes(targetCheckbox: HTMLInputElement) {
  sortTypesCheckboxes.forEach((sortTypesCheckbox) => {
    if (sortTypesCheckbox.contains(targetCheckbox) === false) {
      sortTypesCheckbox.checked = false
    }
  })
}

export function handleSortTypeCheckboxChange(event: Event) {
  const targetCheckbox = event.target as HTMLInputElement
  uncheckNonTargetCheckboxes(targetCheckbox)

  const storageSortParameters = getStorageSortParameters()
  setStorageSortParameters({
    type: targetCheckbox.value as SortType,
    order: storageSortParameters !== null ? storageSortParameters.order : "desc"
  })
}