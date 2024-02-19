export type SortType = "name" | "comments" | "publish_date" | "size" | "completed" | "seed" | "leech";

export type SortOrder = "asc" | "desc"

export type SortParams = {
  order: SortOrder,
  type: SortType
} | null

export interface StoreData {
  sortParams: SortParams | null
}