import { sortTypesCheckboxes } from "./components/sortFormWrapper/sortForm/sortTypes/sortTypes"
import { Store } from "@controllers/store"

export function setSortTypesCheckboxesAttributes() {
  sortTypesCheckboxes.forEach((sortTypeCheckbox) => {
    sortTypeCheckbox.checked = Store.sortParams?.type === sortTypeCheckbox.value
  })
}