import styles from "./sortForm.module.css"
import { createCustomElement } from "../../utils/createCustomElement"
import { sortTypesElement } from "./sortTypes/sortTypes"
import { } from "./shared/checkboxInputWrapper/checkboxInputWrapper"
import { sortOrderElement } from "./sortOrder/sortOrder"
import { toggleSortFormButton } from "../toggleSortFormButton/toggleSortFormButton"
import { closeSortFormButton } from "./closeButton/closeButton"

export const sortForm = createCustomElement(({
  tagName: "form",
  attributes: [["class", styles.form]],
  childrens: [
    sortTypesElement,
    sortOrderElement,
    closeSortFormButton
  ]
}))

export const closeSortFormBackground = createCustomElement(({
  tagName: "div",
  attributes: [["class", styles.closeSortFormBackground]]
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