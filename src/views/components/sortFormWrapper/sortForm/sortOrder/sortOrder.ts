import { createCustomElement } from "@views/utils/createCustomElement"
import { createSortOrderButton } from "./sortOrderButton/sortOrderButton"
import styles from "./sortOrder.module.css"

export const sortOrderButtons = [
  createSortOrderButton("asc"),
  createSortOrderButton("desc")
]

export const sortOrderElement = createCustomElement({
  tagName: "div",
  attributes: [["class", styles.sortOrder]],
  childrens: sortOrderButtons
})