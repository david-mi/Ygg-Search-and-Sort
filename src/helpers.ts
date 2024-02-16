import type { SortParams } from "./types"

function formatHostname() {
  const { hostname } = location
  return `www3.${hostname.replace(/.+(?=ygg)/, "")}`
}

export function getSearchForms() {
  return document.querySelectorAll<HTMLFormElement>(`form[action='https://${formatHostname()}/engine/search']`)
}

export function setSearchParamsFromFormData({ formData, url }: { formData: FormData, url: URL }) {
  for (const [name, value] of formData.entries()) {
    url.searchParams.set(name, value as string)
  }

  url.searchParams.set("do", "search")
}

export function setSortParams({ url, sortParams }: { url: URL, sortParams: SortParams }) {
  url.searchParams.set("order", sortParams.order)
  url.searchParams.set("sort", sortParams.sortBy)
}

export function redirect(url: URL) {
  window.location.replace(url)
}