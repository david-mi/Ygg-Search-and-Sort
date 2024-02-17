import { positionSortFormWrapperRelativeToNameInput } from "../../views/helpers/positionSortFormRelativeToNameInput"

export function handleNameInputFocus() {
  positionSortFormWrapperRelativeToNameInput()

  document.addEventListener("scroll", positionSortFormWrapperRelativeToNameInput)
}