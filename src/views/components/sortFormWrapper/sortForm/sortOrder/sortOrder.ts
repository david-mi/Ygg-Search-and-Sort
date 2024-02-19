import { createCustomElement } from "@views/utils/createCustomElement"
import { createArrowSvgHtml } from "./arrowSvg/arrowSvg"
import { SORT_BUTTON_DATA_ATTRIBUTES } from "@views/constants"
import styles from "./sortOrder.module.css"

export const orderButtons = [
  createCustomElement({
    tagName: "button",
    attributes: [
      ["class", styles.orderButton],
      ["type", "button"],
      [SORT_BUTTON_DATA_ATTRIBUTES.ORDER, "asc"],
      ["disabled", ""]
    ],
    childrens: [createArrowSvgHtml("up")]
  }),
  createCustomElement({
    tagName: "button",
    attributes: [
      ["class", styles.orderButton],
      ["type", "button"],
      [SORT_BUTTON_DATA_ATTRIBUTES.ORDER, "desc"],
      [SORT_BUTTON_DATA_ATTRIBUTES.ACTIVE, ""],
      ["disabled", ""]
    ],
    childrens: [createArrowSvgHtml("down")]
  })
]

export const sortOrderElement = createCustomElement({
  tagName: "div",
  attributes: [["class", styles.sortOrder]],
  childrens: orderButtons
})