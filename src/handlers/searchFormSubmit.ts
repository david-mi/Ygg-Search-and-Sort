import { setSearchParamsFromFormData, redirect, setSortParams } from "@helpers"

export function handleSearchFormSubmit(event: SubmitEvent) {
  event.preventDefault()

  const form = event.target as HTMLFormElement
  const actionUrl = new URL(form.action)
  setSearchParamsFromFormData({ url: actionUrl, formData: new FormData(form) })
  setSortParams({
    url: actionUrl,
    sortParams: { order: "desc", type: "seed" }
  })
  redirect(actionUrl)
}