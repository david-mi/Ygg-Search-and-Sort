import type { SortParams } from "types";

export function getStorageSortParameters() {
  const sortParametersFromStorage = localStorage.getItem("sortParameters")

  return sortParametersFromStorage ? JSON.parse(sortParametersFromStorage) as SortParams : null;
}