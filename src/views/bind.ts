import { getSearchForms } from "./helpers/getSearchForms"
import { handleFormSubmit } from "../handlers/sortForm/submit"
import { handleNameInputFocus } from "../handlers/sortForm/nameInputFocus"
import { getSearchFormNameInput } from "./helpers/getSearchFormNameInput"
import { handleNameInputBlur } from "../handlers/sortForm/nameInputBlur"
import { toggleSortFormButton } from "./components/toggleSortFormButton/toggleSortFormButton"
import { toggleSortFormDisplayMode } from "./helpers/toggleSortForm"
import { closeSortFormBackground } from "./components/closeSortFromBackground/closeSortFormBackground"
import { closeSortFormButton } from "./components/sortFormWrapper/sortForm/closeButton/closeButton"

export function bindEvents() {
  const searchForms = getSearchForms()

  if (searchForms.length === 0) {
    return console.error({ YggCustomScriptError: "Aucun formulaire de recherche trouvé" })
  }

  searchForms.forEach((searchForm) => {
    searchForm.addEventListener("submit", handleFormSubmit)
    const nameInput = getSearchFormNameInput(searchForm)
    nameInput.addEventListener("focus", handleNameInputFocus)
    nameInput.addEventListener("blur", handleNameInputBlur)
  })

  toggleSortFormButton.addEventListener("click", toggleSortFormDisplayMode)
  closeSortFormBackground.addEventListener("click", toggleSortFormDisplayMode)
  closeSortFormButton.addEventListener("click", toggleSortFormDisplayMode)
}