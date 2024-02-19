import { createCustomElement } from "@utils/createCustomElement"
import { createCustomCheckbox } from "../customCheckbox/customCheckbox"
import styles from "./checkboxInputWrapper.module.css"

interface CheckBoxWrapperProps {
  label: string
  name: string
}

export function createCheckboxInputWrapperElement({ name, label }: CheckBoxWrapperProps) {
  return createCustomElement((({
    tagName: "div",
    attributes: [["class", styles.checkboxInputWrapper]],
    childrens: [
      `<label for="${name}">${label}</label>`,
      createCustomCheckbox(name)
    ]
  })))
}