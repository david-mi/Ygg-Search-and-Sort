import { createCustomElement } from "../../../utils/createCustomElement";
import styles from "./closeButton.module.css"

export const closeSortFormButton = createCustomElement(({
  tagName: "button",
  attributes: [["class", styles.button], ["type", "button"]],
  childrens: [
    `<svg xmlns="http://www.w3.org/2000/svg" class="${styles.svg}" width="32" height="32" viewBox="0 0 24 24">
      <path fill="currentColor" d="m8.382 17.025l-1.407-1.4L10.593 12L6.975 8.4L8.382 7L12 10.615L15.593 7L17 8.4L13.382 12L17 15.625l-1.407 1.4L12 13.41z"/>  
     </svg>`
  ]
}))