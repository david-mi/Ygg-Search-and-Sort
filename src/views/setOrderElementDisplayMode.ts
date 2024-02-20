import { sortTypesCheckboxes } from "./components/sortFormWrapper/sortForm/sortTypes/sortTypes"
import { sortOrderElement } from "./components/sortFormWrapper/sortForm/sortOrder/sortOrder"

export function setOrderElementDisplayMode() {
  const haveTypeSelected = sortTypesCheckboxes.some((sortTypeCheckbox) => sortTypeCheckbox.checked)

  sortOrderElement.style.display = haveTypeSelected
    ? "flex"
    : "none"
}