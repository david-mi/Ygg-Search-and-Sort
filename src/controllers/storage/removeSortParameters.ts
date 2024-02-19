import type { LocalStorageSortKey } from "types"

export function removeStorageSortParameters() {
  const key: LocalStorageSortKey = "sortParams"

  localStorage.removeItem(key)
}