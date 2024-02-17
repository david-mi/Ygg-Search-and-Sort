import styles from "./sortForm.module.css"
import { createCustomElement } from "../../utils/createCustomElement"
import { sortTypesElement } from "./sortTypes/sortTypes"
import { createCheckboxInputWrapperElement } from "./shared/checkboxInputWrapper/checkboxInputWrapper"
import { sortOrderElement } from "./sortOrder/sortOrder"

export const sortFormElement = createCustomElement(({
  tagName: "form",
  attributes: [["class", styles.container]],
  childrens: [
    sortTypesElement,
    createCheckboxInputWrapperElement({ name: "auto_toogle", label: "Auto-toggle" }),
    sortOrderElement
  ]
}))