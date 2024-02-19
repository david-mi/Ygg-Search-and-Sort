import { Store } from "@controllers/store"
import type { SortOrder } from "@types"
import { SORT_BUTTON_DATA_ATTRIBUTES } from "@views/constants"
import { setSortOrderButtonsAttributes } from "@views/setSortOrderButtonsAttributes"

export function handleOrderButtonClick(event: MouseEvent) {
  const orderButton = event.target as HTMLButtonElement

  Store.setData("sortParams", {
    type: Store.sortParams!.type,
    order: orderButton.getAttribute(SORT_BUTTON_DATA_ATTRIBUTES.ORDER) as SortOrder
  })

  setSortOrderButtonsAttributes()
}