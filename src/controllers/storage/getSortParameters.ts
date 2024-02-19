import type { SortParams } from "types";
import { STORE_KEYS } from "@controllers/constants";

export function getStorageSortParameters() {
  const sortParametersFromStorage = localStorage.getItem(STORE_KEYS.SORT_PARAMS)
  return sortParametersFromStorage !== null
    ? JSON.parse(sortParametersFromStorage) as SortParams
    : null;
}