import type { SortType } from "types"
import { Store } from "@controllers/store"
import { setOrderButtonsDisplayMode } from "@views/setOrderButtonsDisplayMode"
import { setSortOrderButtonsAttributes } from "@views/setSortOrderButtonsAttributes"
import { setSortTypeCheckboxesAttributes } from "@views/setSortTypeCheckboxesAttributes"

export function handleSortTypeCheckboxChange(event: Event) {
  const targetCheckbox = event.target as HTMLInputElement

  Store.setData(
    "sortParams",
    targetCheckbox.checked
      ? {
        type: targetCheckbox.value as SortType,
        order: Store.sortParams?.order || "desc"
      }
      : null
  )

  setOrderButtonsDisplayMode()
  setSortOrderButtonsAttributes()
  setSortTypeCheckboxesAttributes()
}