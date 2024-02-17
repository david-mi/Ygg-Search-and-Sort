import { convertNumberToPixelString } from "./convertNumberToPixelString"
import { sortFormElement } from "../components/sortForm/sortForm"

export function positionSortFormRelativeToNameInput() {
  const MARGIN = 0

  const { activeElement } = document
  const isFocusingNameInput = (
    activeElement &&
    activeElement.tagName === "INPUT" &&
    activeElement.hasAttribute("name")
  )

  if (isFocusingNameInput) {
    const { bottom: nameInputBottom, right: nameInputRight } = activeElement.getBoundingClientRect()

    sortFormElement.style.top = convertNumberToPixelString(nameInputBottom + MARGIN)
    sortFormElement.style.left = convertNumberToPixelString(nameInputRight - sortFormElement.getBoundingClientRect().width + MARGIN)
  }
}