import { getSearchForms } from "./helpers/getSearchForms"
import { handleFormSubmit } from "../handlers/sortForm/submit"
import { handleMainInputFocus } from "../handlers/sortForm/nameInputFocus"
import { getSearchFormNameInput } from "./helpers/getSearchFormNameInput"

export function bindEvents() {
  const searchForms = getSearchForms()

  if (searchForms.length === 0) {
    return console.error({ YggCustomScriptError: "Aucun formulaire de recherche trouvé" })
  }

  searchForms.forEach((searchForm) => {
    searchForm.addEventListener("submit", handleFormSubmit)

    const nameInput = getSearchFormNameInput(searchForm)
    nameInput.addEventListener("focus", handleMainInputFocus)
  })
}