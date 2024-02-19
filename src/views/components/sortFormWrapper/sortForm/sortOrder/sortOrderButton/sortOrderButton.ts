import { createCustomElement } from "@views/utils/createCustomElement";
import styles from "./sortOrderButton.module.css"
import { createArrowSvgHtml } from "./arrowSvg/arrowSvg";
import { SORT_BUTTON_DATA_ATTRIBUTES } from "@views/constants";
import type { SortOrder } from "@types";

export function createSortOrderButton(sortOrder: SortOrder) {
  return createCustomElement({
    tagName: "button",
    attributes: [
      ["class", styles.sortOrderButton],
      ["type", "button"],
      [SORT_BUTTON_DATA_ATTRIBUTES.ORDER, sortOrder],
    ],
    childrens: [createArrowSvgHtml(sortOrder)]
  })
}