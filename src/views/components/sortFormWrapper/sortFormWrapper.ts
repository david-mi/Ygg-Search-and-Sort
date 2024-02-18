import { toggleSortFormButton } from "../toggleSortFormButton/toggleSortFormButton"
import { createCustomElement } from "@utils/createCustomElement"
import { sortForm } from "./sortForm/sortForm"
import styles from "./sortFormWrapper.module.css"

export const sortFormWrapper = createCustomElement(({
  tagName: "div",
  attributes: [["class", styles.sortFormWrapper]],
  childrens: [
    toggleSortFormButton,
    sortForm
  ]
}))