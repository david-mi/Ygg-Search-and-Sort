import { handleSearchFormSubmit } from "@handlers/searchFormSubmit"
import { getSearchFormNameInput } from "./helpers/getSearchFormNameInput"
import { toggleSortFormButton } from "./components/toggleSortFormButton/toggleSortFormButton"
import { toggleSortFormDisplayMode } from "./helpers/toggleSortForm"
import { closeSortFormButton } from "./components/sortFormWrapper/sortForm/closeButton/closeButton"
import { sortFormWrapper } from "./components/sortFormWrapper/sortFormWrapper"
import { positionSortFormWrapperRelativeToNameInput } from "./helpers/positionSortFormRelativeToNameInput"

export function bindEvents(searchForms: NodeListOf<HTMLFormElement>) {
  searchForms.forEach((searchForm) => {
    searchForm.addEventListener("submit", handleSearchFormSubmit)
    const nameInput = getSearchFormNameInput(searchForm)
    nameInput.addEventListener("focus", positionSortFormWrapperRelativeToNameInput)
    nameInput.addEventListener("click", (event) => event.stopPropagation())
  })

  toggleSortFormButton.addEventListener("click", toggleSortFormDisplayMode)
  closeSortFormButton.addEventListener("click", toggleSortFormDisplayMode)
  sortFormWrapper.addEventListener("click", event => event.stopPropagation())
}