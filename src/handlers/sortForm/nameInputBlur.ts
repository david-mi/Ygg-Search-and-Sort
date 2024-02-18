
import { positionSortFormWrapperRelativeToNameInput } from "@views/helpers/positionSortFormRelativeToNameInput"

export function handleNameInputBlur(event: FocusEvent) {
  const nameInput = event.target as HTMLInputElement

  document.removeEventListener("scroll", positionSortFormWrapperRelativeToNameInput)
}