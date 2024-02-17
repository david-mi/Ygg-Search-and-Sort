
import { sortFormElement } from "../../views/components/sortForm/sortForm"
import { convertNumberToPixelString } from "../../views/helpers/convertNumberToPixelString"

export function handleMainInputFocus(event: FocusEvent) {
  const nameInput = event.target as HTMLInputElement
  const MARGIN = 20

  const { bottom: nameInputBottom, right: nameInputRight } = nameInput.getBoundingClientRect()
  sortFormElement.style.top = convertNumberToPixelString(nameInputBottom + MARGIN)
  sortFormElement.style.left = convertNumberToPixelString(nameInputRight - sortFormElement.getBoundingClientRect().width + MARGIN)
}