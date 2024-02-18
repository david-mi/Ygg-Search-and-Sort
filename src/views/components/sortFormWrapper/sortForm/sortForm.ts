import styles from "./sortForm.module.css"
import { createCustomElement } from "@utils/createCustomElement"
import { sortTypesElement } from "./sortTypes/sortTypes"
import { sortOrderElement } from "./sortOrder/sortOrder"
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