
import { sortFormElement } from "../../views/components/sortForm/sortForm"
import { positionSortFormRelativeToNameInput } from "../../views/helpers/positionSortFormRelativeToNameInput"

export function handleMainInputFocus(event: FocusEvent) {
  const nameInput = event.target as HTMLInputElement

  positionSortFormRelativeToNameInput(sortFormElement, nameInput)
}