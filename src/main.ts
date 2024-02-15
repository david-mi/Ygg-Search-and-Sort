interface SortParams {
  order: "asc" | "desc",
  sortBy: "seed"
}

(function () {
  console.log("YGG - Auto sort by seed v1.2.0");

  function searchFormsSelector() {
    return document.querySelectorAll<HTMLFormElement>(`form[action='https://${formatHostname()}/engine/search']`)
  }

  function formatHostname() {
    const { hostname } = location
    return `www3.${hostname.replace(/.+(?=ygg)/, "")}`
  }

  const searchForms = searchFormsSelector()

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

  function setSearchParamsFromFormData({ formData, url }: { formData: FormData, url: URL }) {
    for (const [name, value] of formData.entries()) {
      url.searchParams.set(name, value as string)
    }

    url.searchParams.set("do", "search")
  }

  function setSortParams({ url, sortParams }: { url: URL, sortParams: SortParams }) {
    url.searchParams.set("order", sortParams.order)
    url.searchParams.set("sort", sortParams.sortBy)
  }

  function redirect(url: URL) {
    window.location.replace(url)
  }

  searchForms.forEach((searchForm) => searchForm.addEventListener("submit", handleFormSubmit))
})();


