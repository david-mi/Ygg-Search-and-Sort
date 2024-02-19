export type SortType = "name" | "comments" | "publish_date" | "size" | "completed" | "seed" | "leech";

export type SortOrder = "asc" | "desc"

export interface SortParams {
  order: SortOrder,
  type: SortType
}