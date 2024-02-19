import { Store } from "@controllers/store"
import { orderButtons } from "./components/sortFormWrapper/sortForm/sortOrder/sortOrder"
import { SORT_BUTTON_DATA_ATTRIBUTES } from "./constants"

export function setSortOrderButtonsAttributes() {
  orderButtons.forEach((orderButton) => {
    const orderData = orderButton.getAttribute(SORT_BUTTON_DATA_ATTRIBUTES.ORDER)

    if (Store.sortParams?.order === orderData) {
      orderButton.setAttribute(SORT_BUTTON_DATA_ATTRIBUTES.ACTIVE, "")
    } else {
      orderButton.removeAttribute(SORT_BUTTON_DATA_ATTRIBUTES.ACTIVE)
    }
  })
}