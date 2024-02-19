import { sortFormWrapper } from "./components/sortFormWrapper/sortFormWrapper"
import { bindEvents } from "./bindEvents"
import { getSearchForms } from "./helpers/getSearchForms"
import { getSearchFormNameInput } from "./helpers/getSearchFormNameInput"
import { setOrderButtonsDisplayMode } from "./setOrderButtonsDisplayMode"
import { setSortOrderButtonsAttributes } from "./setSortOrderButtonsAttributes"
import { setSortTypeCheckboxesAttributes } from "./setSortTypeCheckboxesAttributes"

export function initViews() {
  document.body.append(sortFormWrapper)
  const searchForms = getSearchForms()

  if (searchForms.length === 0) {
    return console.error({ YggCustomScriptError: "Aucun formulaire de recherche trouvé" })
  }

  setOrderButtonsDisplayMode()
  setSortOrderButtonsAttributes()
  setSortTypeCheckboxesAttributes()
  bindEvents(searchForms)

  const mainSearchInput = getSearchFormNameInput(searchForms[0])
  mainSearchInput.focus()
}