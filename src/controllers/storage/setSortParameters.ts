import type { SortParams } from "types"
import { LOCAL_STORAGE_KEYS } from "@controllers/constants"

export function setStorageSortParameters(sortParameters: SortParams) {
  localStorage.setItem(
    LOCAL_STORAGE_KEYS.SORT_PARAMS,
    JSON.stringify(sortParameters)
  )
}