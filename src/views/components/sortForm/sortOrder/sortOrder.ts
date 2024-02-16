import { createCustomElement } from "../../../utils/createCustomElement"
import { createArrowSvgHtml } from "./arrowSvg/arrowSvg"
import styles from "./sortOrder.module.css"

const ascendantOrderButton = createCustomElement({
  tagName: "button",
  attributes: [
    ["class", styles.orderButton]
  ],
  childrens: [createArrowSvgHtml("up")]
})

const descendantOrderButton = createCustomElement({
  tagName: "button",
  attributes: [
    ["class", styles.orderButton]
  ],
  childrens: [createArrowSvgHtml("down")]
})

export const sortOrderElement = createCustomElement({
  tagName: "div",
  attributes: [["class", styles.sortOrder]],
  childrens: [ascendantOrderButton, descendantOrderButton]
})