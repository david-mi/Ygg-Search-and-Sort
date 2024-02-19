import type { SortParams } from "types"
import { STORE_KEYS } from "@controllers/constants"

export function setStorageSortParameters(sortParameters: SortParams) {
  localStorage.setItem(
    STORE_KEYS.SORT_PARAMS,
    JSON.stringify(sortParameters)
  )
}