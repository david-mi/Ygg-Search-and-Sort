import { convertNumberToPixelString } from "./convertNumberToPixelString"
import { sortFormWrapper } from "../components/sortForm/sortForm"

export function positionSortFormWrapperRelativeToNameInput() {
  const { activeElement } = document
  const isFocusingNameInput = (
    activeElement &&
    activeElement.tagName === "INPUT" &&
    activeElement.hasAttribute("name")
  )

  if (isFocusingNameInput) {
    const nameInput = activeElement as HTMLInputElement
    const { top: nameInputTop, right: nameInputRight } = nameInput.getBoundingClientRect()

    const nameInputTopToNumber = parseInt(getComputedStyle(nameInput).paddingTop, 10);
    const nameInputLeftToNumber = parseInt(getComputedStyle(nameInput).paddingLeft, 10);
    const nameInputRightToNumber = parseInt(getComputedStyle(nameInput).paddingRight, 10);

    nameInput.style.paddingRight = "20px"
    sortFormWrapper.style.top = convertNumberToPixelString(nameInputTop + nameInputTopToNumber)
    sortFormWrapper.style.marginRight = convertNumberToPixelString(nameInputRightToNumber)
    sortFormWrapper.style.left = convertNumberToPixelString(
      nameInputRight -
      sortFormWrapper.getBoundingClientRect().width -
      nameInputLeftToNumber
    )
  }
}