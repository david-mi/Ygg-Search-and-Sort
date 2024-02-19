import type { LocalStorageSortKey, SortParams } from "types";

export function getStorageSortParameters() {
  const key: LocalStorageSortKey = "sortParams"

  const sortParametersFromStorage = localStorage.getItem(key)
  return sortParametersFromStorage ? JSON.parse(sortParametersFromStorage) as SortParams : null;
}