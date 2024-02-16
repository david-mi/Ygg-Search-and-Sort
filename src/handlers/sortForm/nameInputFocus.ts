
import { sortFormElement } from "../../views/components/sortForm/sortForm"

export function handleMainInputFocus(event: FocusEvent) {
  const nameInput = event.target as HTMLInputElement
  nameInput.parentElement!.insertBefore(sortFormElement, nameInput)
}