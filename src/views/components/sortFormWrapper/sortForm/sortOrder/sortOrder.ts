import { createCustomElement } from "@views/utils/createCustomElement"
import { createArrowSvgHtml } from "./arrowSvg/arrowSvg"
import styles from "./sortOrder.module.css"

export const orderButtons = [
  createCustomElement({
    tagName: "button",
    attributes: [
      ["class", styles.orderButton],
      ["type", "button"],
      ["data-sort", "asc"],
      ["disabled", ""]
    ],
    childrens: [createArrowSvgHtml("up")]
  }),
  createCustomElement({
    tagName: "button",
    attributes: [
      ["class", styles.orderButton],
      ["type", "button"],
      ["data-sort", "desc"],
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