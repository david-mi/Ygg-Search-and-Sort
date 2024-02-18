import type { LocalStorageSortKey, SortParams } from "types"

export function setStorageSortParameters(sortParameters: SortParams) {
  const key: LocalStorageSortKey = "sortParams"

  localStorage.setItem(key, JSON.stringify(sortParameters))
}