import styles from "./sortForm.module.css"
import { createCustomElement } from "../../utils/createCustomElement"
import { sortTypesElement } from "./sortTypes/sortTypes"
import { sortOrderElement } from "./sortOrder/sortOrder"
import { toggleSortFormButton } from "../toggleSortFormButton/toggleSortFormButton"
import { closeSortFormButton } from "./closeButton/closeButton"
import { closeSortFormBackground } from "../closeSortFromBackground/closeSortFormBackground"

export const sortForm = createCustomElement(({
  tagName: "form",
  attributes: [["class", styles.form]],
  childrens: [
    sortTypesElement,
    sortOrderElement,
    closeSortFormButton
  ]
}))

export const sortFormWrapper = createCustomElement(({
  tagName: "div",
  attributes: [["class", styles.wrapper]],
  childrens: [
    closeSortFormBackground,
    toggleSortFormButton,
    sortForm
  ]
}))