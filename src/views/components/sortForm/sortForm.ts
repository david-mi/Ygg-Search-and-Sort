import styles from "./sortForm.module.css"
import { createCustomElement } from "../../utils/createCustomElement"
import { sortTypesElement } from "./sortTypes/sortTypes"
import { createCheckboxInputWrapperElement } from "./shared/checkboxInputWrapper/checkboxInputWrapper"
import { sortOrderElement } from "./sortOrder/sortOrder"
import { toggleSortFormButton } from "../toggleSortFormButton/toggleSortFormButton"

export const sortForm = createCustomElement(({
  tagName: "form",
  attributes: [["class", styles.form]],
  childrens: [
    sortTypesElement,
    createCheckboxInputWrapperElement({ name: "auto_toogle", label: "Auto-toggle" }),
    sortOrderElement
  ]
}))

export const sortFormWrapper = createCustomElement(({
  tagName: "div",
  attributes: [["class", styles.wrapper]],
  childrens: [
    toggleSortFormButton,
    sortForm
  ]
}))