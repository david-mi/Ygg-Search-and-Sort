import { setSearchParamsFromFormData, setSortParams, redirect } from "../../helpers"

export function handleFormSubmit(event: SubmitEvent) {
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