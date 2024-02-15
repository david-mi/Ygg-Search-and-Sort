import {
  setSearchParamsFromFormData,
  redirect,
  setSortParams,
  getSearchForms
} from "./helpers";

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
})();


