import { SORT_BUTTON_DATA_ATTRIBUTES } from "@views/constants";
import type { SortOrder } from "@types";
import { createCustomButtonWithSvgGradient } from "@views/components/shared/createCustomButtonWithSvgGradient/createCustomButtonWithSvgGradient";
import styles from "./sortOrderButton.module.css"

export function createSortOrderButton(sortOrder: SortOrder) {
  return createCustomButtonWithSvgGradient(({
    attributes: [
      ["class", styles.sortOrderButton],
      ["type", "button"],
      [SORT_BUTTON_DATA_ATTRIBUTES.ORDER, sortOrder],
    ],
    paths: [`<path fill="currentColor" d="M11 18V9.825L7.4 13.4L6 12l6-6l6 6l-1.4 1.4L13 9.825V18h-2Z"/>`],
    svgClassName: `${styles.arrowSvg} ${styles[sortOrder]}`
  }))
}