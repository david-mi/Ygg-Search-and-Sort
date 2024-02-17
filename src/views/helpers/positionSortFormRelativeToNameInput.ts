import { convertNumberToPixelString } from "./convertNumberToPixelString"
import { sortFormElement } from "../components/sortForm/sortForm"
import { convertPixelStringToNumber } from "./convertPixelStringToNumber"

export function positionSortFormRelativeToNameInput() {
  const MARGIN_BLOCK = 15
  const MARGIN_INLINE = 10

  const { activeElement } = document
  const isFocusingNameInput = (
    activeElement &&
    activeElement.tagName === "INPUT" &&
    activeElement.hasAttribute("name")
  )

  if (isFocusingNameInput) {
    const { bottom: nameInputBottom, right: nameInputRight } = activeElement.getBoundingClientRect()

    const activeElementPadding = getComputedStyle(activeElement).padding as `${number}px`
    const activeElementPaddingToNumber = convertPixelStringToNumber(activeElementPadding)

    sortFormElement.style.top = convertNumberToPixelString(
      nameInputBottom +
      MARGIN_BLOCK -
      activeElementPaddingToNumber
    )
    sortFormElement.style.left = convertNumberToPixelString(
      nameInputRight -
      sortFormElement.getBoundingClientRect().width -
      activeElementPaddingToNumber +
      MARGIN_INLINE
    )
  }
}