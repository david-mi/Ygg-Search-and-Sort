import styles from "./toggleSortFormButton.module.css"
import { createCustomButtonWithSvgGradient } from "../shared/createCustomButtonWithSvgGradient/createCustomButtonWithSvgGradient";

export const toggleSortFormButton = createCustomButtonWithSvgGradient({
  gradient: {
    startColor: "#cbd1da",
    endColor: "#cbd1da",
    orientation: "horizontal",
  },
  paths: [
    `<path fill="currentColor" fill="url(#toggleSortFormButton-1)" d="M12 13.125a.75.75 0 0 1 .538 1.272l-4 4.125a.75.75 0 0 1-1.076 0l-4-4.125A.75.75 0 0 1 4 13.125h3.25V6a.75.75 0 1 1 1.5 0v7.125z"/>`,
    `<path fill="currentColor" fill="url(#toggleSortFormButton-1)" d="M20 10.875a.75.75 0 0 0 .538-1.272l-4-4.125a.75.75 0 0 0-1.076 0l-4 4.125A.75.75 0 0 0 12 10.875h3.25V18a.75.75 0 0 0 1.5 0v-7.125z"/>`
  ],
  attributes: [["class", styles.toggleSortFormButton]]
})