import { Store } from "@controllers/store"
import { sortOrderButtons } from "./components/sortFormWrapper/sortForm/sortOrder/sortOrder"
import { SORT_BUTTON_DATA_ATTRIBUTES } from "./constants"

export function setSortOrderButtonsAttributes() {
  sortOrderButtons.forEach((sortOrderButton) => {
    const orderData = sortOrderButton.getAttribute(SORT_BUTTON_DATA_ATTRIBUTES.ORDER)

    if (Store.sortParams?.order === orderData) {

      sortOrderButton.setAttribute(SORT_BUTTON_DATA_ATTRIBUTES.ACTIVE, "")
    } else {
      sortOrderButton.removeAttribute(SORT_BUTTON_DATA_ATTRIBUTES.ACTIVE)
    }
  })
}