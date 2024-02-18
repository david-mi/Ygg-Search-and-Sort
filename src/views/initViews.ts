import { sortFormWrapper } from "./components/sortFormWrapper/sortFormWrapper"
import { bindEvents } from "./bindEvents"
import { getSearchForms } from "./helpers/getSearchForms"

export function initViews() {
  document.body.append(sortFormWrapper)
  const searchForms = getSearchForms()

  if (searchForms.length === 0) {
    return console.error({ YggCustomScriptError: "Aucun formulaire de recherche trouvé" })
  }

  bindEvents(searchForms)
}