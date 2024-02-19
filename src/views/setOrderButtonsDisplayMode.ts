import { orderButtons } from "./components/sortFormWrapper/sortForm/sortOrder/sortOrder"
import { sortTypesCheckboxes } from "./components/sortFormWrapper/sortForm/sortTypes/sortTypes"

export function setOrderButtonsDisplayMode() {
  const haveTypeSelected = sortTypesCheckboxes.some((sortTypeCheckbox) => sortTypeCheckbox.checked)
  orderButtons.forEach((orderButton) => orderButton.disabled = !haveTypeSelected)
}