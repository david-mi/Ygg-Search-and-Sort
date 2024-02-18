import { getSearchForms } from "./helpers/getSearchForms"
import { handleSearchFormSubmit } from "@handlers/searchFormSubmit"
import { handleNameInputFocus } from "@handlers/sortForm/nameInputFocus"
import { getSearchFormNameInput } from "./helpers/getSearchFormNameInput"
import { handleNameInputBlur } from "@handlers/sortForm/nameInputBlur"
import { toggleSortFormButton } from "./components/toggleSortFormButton/toggleSortFormButton"
import { toggleSortFormDisplayMode } from "./helpers/toggleSortForm"
import { closeSortFormButton } from "./components/sortFormWrapper/sortForm/closeButton/closeButton"
import { sortFormWrapper } from "./components/sortFormWrapper/sortFormWrapper"

export function bindEvents() {
  const searchForms = getSearchForms()

  if (searchForms.length === 0) {
    return console.error({ YggCustomScriptError: "Aucun formulaire de recherche trouvé" })
  }

  searchForms.forEach((searchForm) => {
    searchForm.addEventListener("submit", handleSearchFormSubmit)
    const nameInput = getSearchFormNameInput(searchForm)
    nameInput.addEventListener("focus", handleNameInputFocus)
    nameInput.addEventListener("blur", handleNameInputBlur)
    nameInput.addEventListener("click", (event) => event.stopPropagation())
  })

  toggleSortFormButton.addEventListener("click", toggleSortFormDisplayMode)
  closeSortFormButton.addEventListener("click", toggleSortFormDisplayMode)
  sortFormWrapper.addEventListener("click", event => event.stopPropagation())
}