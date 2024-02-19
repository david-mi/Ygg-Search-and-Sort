import { orderButtons } from "./components/sortFormWrapper/sortForm/sortOrder/sortOrder";
import { sortTypesCheckboxes } from "./components/sortFormWrapper/sortForm/sortTypes/sortTypes";
import { Store } from "@controllers/store";
import { SORT_BUTTON_DATA_ATTRIBUTES } from "./constants";

export function setSortFormElementsAttributes() {
  orderButtons.forEach((orderButton) => {
    const orderData = orderButton.getAttribute(SORT_BUTTON_DATA_ATTRIBUTES.ORDER)

    if (Store.sortParams?.order === orderData) {
      orderButton.setAttribute(SORT_BUTTON_DATA_ATTRIBUTES.ACTIVE, "")
    } else {
      orderButton.removeAttribute(SORT_BUTTON_DATA_ATTRIBUTES.ACTIVE)
    }
  })

  sortTypesCheckboxes.forEach((sortTypeCheckbox) => {
    sortTypeCheckbox.checked = Store.sortParams?.type === sortTypeCheckbox.value
  })
}