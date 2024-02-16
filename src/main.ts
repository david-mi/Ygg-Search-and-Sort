import {
  setSearchParamsFromFormData,
  redirect,
  setSortParams,
  getSearchForms,
  convertTemplateLiteralToHtmlElement
} from "./helpers";

import { sortForm } from "./views/sortForm/sortForm";

(function () {
  console.log("YGG - Auto sort by seed v1.2.0");

  const searchForms = getSearchForms()

  if (searchForms.length === 0) {
    return console.error({ YggCustomScriptError: "Aucun formulaire de recherche trouvé" })
  }

  function handleFormSubmit(event: SubmitEvent) {
    event.preventDefault()

    const form = event.target as HTMLFormElement
    const actionUrl = new URL(form.action)
    setSearchParamsFromFormData({ url: actionUrl, formData: new FormData(form) })
    setSortParams({
      url: actionUrl,
      sortParams: { order: "desc", sortBy: "seed" }
    })
    redirect(actionUrl)
  }

  searchForms.forEach((searchForm) => searchForm.addEventListener("submit", handleFormSubmit))

  const mainFormSearchInput = searchForms[0]

  const boundingClient = mainFormSearchInput.getBoundingClientRect()

  const sortFormElement = convertTemplateLiteralToHtmlElement(sortForm)

  document.body.insertAdjacentElement("afterbegin", sortFormElement)
  sortFormElement.style.top = `${boundingClient.bottom + 10}px`
  sortFormElement.style.left = `${boundingClient.right - sortFormElement.getBoundingClientRect().width}px`
})();
