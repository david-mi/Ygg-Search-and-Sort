import { createCustomElement } from "@views/utils/createCustomElement";
import styles from "./sortFormTitle.module.css"

export const sortFormTitle = createCustomElement(({
  tagName: "h4",
  attributes: [["class", styles.sortFormTitle]],
  childrens: ["Tier par"]
}))