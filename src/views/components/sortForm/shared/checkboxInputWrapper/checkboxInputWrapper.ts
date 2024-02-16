import { createCustomElement } from "../../../../utils/createCustomElement"
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
      createCustomElement((({
        tagName: "input",
        attributes: [
          ["type", "checkbox"],
          ["name", name],
          ["id", name]
        ]
      })))
    ]
  })))
}