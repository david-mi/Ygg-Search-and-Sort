import { convertNumberToPixelString } from "./convertNumberToPixelString"

export function positionSortFormRelativeToNameInput(sortForm: HTMLFormElement, nameInput: HTMLInputElement) {
  const MARGIN = 20

  const { bottom: nameInputBottom, right: nameInputRight } = nameInput.getBoundingClientRect()

  sortForm.style.top = convertNumberToPixelString(nameInputBottom + MARGIN)
  sortForm.style.left = convertNumberToPixelString(nameInputRight - sortForm.getBoundingClientRect().width + MARGIN)
}