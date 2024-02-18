import { createCustomElement } from "../../utils/createCustomElement";
import styles from "./closeSortFormBackground.module.css"

export const closeSortFormBackground = createCustomElement(({
  tagName: "div",
  attributes: [["class", styles.closeSortFormBackground]]
}))