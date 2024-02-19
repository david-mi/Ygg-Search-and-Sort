import type { SortParams } from "@types";
import { getStorageSortParameters } from "./storage/getSortParameters";
import type { StoreData } from "@types";
import { setStorageSortParameters } from "./storage/setSortParameters";

export class Store {
  static sortParams: SortParams = null

  static setData<K extends keyof StoreData>(storeDataKey: K, value: StoreData[K]) {
    this[storeDataKey] = value
    setStorageSortParameters(value)
  }

  static init() {
    this.sortParams = getStorageSortParameters()
  }
}