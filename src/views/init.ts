import { getSearchForms } from "./helpers/getSearchForms"
import { handleFormSubmit } from "../handlers/sortForm/submit"
import { sortFormElement } from "./components/sortForm/sortForm"
import { overrideDefaultStyles } from "./helpers/overrideDefaultStyles"

export function initViews() {
  overrideDefaultStyles()
  const searchForms = getSearchForms()

  if (searchForms.length === 0) {
    return console.error({ YggCustomScriptError: "Aucun formulaire de recherche trouvé" })
  }

  searchForms.forEach((searchForm) => {
    searchForm.addEventListener("submit", handleFormSubmit)

    const nameInput = searchForm.querySelector("input[name='name']") as HTMLInputElement
    nameInput.addEventListener("focus", () => {
      console.log("focus")
      nameInput.parentElement!.insertBefore(sortFormElement, nameInput)
    })
  })
}



