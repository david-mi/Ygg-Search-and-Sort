import { Store } from "@controllers/store"
import { setSearchParamsFromFormData, redirect, setSortParamsIfExisting } from "@helpers"

export function handleSearchFormSubmit(event: SubmitEvent) {
  event.preventDefault()

  const form = event.target as HTMLFormElement
  const actionUrl = new URL(form.action)
  setSearchParamsFromFormData({ url: actionUrl, formData: new FormData(form) })
  setSortParamsIfExisting({
    url: actionUrl,
    sortParams: Store.sortParams
  })
  redirect(actionUrl)
}