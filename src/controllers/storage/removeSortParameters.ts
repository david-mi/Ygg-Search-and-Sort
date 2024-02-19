import { LOCAL_STORAGE_KEYS } from "@controllers/constants"

export function removeStorageSortParameters() {
  localStorage.removeItem(LOCAL_STORAGE_KEYS.SORT_PARAMS)
}