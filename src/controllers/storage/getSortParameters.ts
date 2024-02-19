import type { SortParams } from "types";
import { LOCAL_STORAGE_KEYS } from "@controllers/constants";

export function getStorageSortParameters() {
  const sortParametersFromStorage = localStorage.getItem(LOCAL_STORAGE_KEYS.SORT_PARAMS)
  return sortParametersFromStorage !== null
    ? JSON.parse(sortParametersFromStorage) as SortParams
    : null;
}