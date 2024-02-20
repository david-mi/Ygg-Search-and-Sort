import { createCustomElement } from "@utils/createCustomElement";
import styles from "./toggleSortFormButton.module.css"

export const toggleSortFormButton = createCustomElement({
  tagName: "button",
  attributes: [["class", styles.button]],
  childrens: [
    `
  <svg class="${styles.svg}" viewBox="0 0 24 24">
    <path fill="currentColor" d="M12 13.125a.75.75 0 0 1 .538 1.272l-4 4.125a.75.75 0 0 1-1.076 0l-4-4.125A.75.75 0 0 1 4 13.125h3.25V6a.75.75 0 1 1 1.5 0v7.125z"/>
    <path fill="currentColor" d="M20 10.875a.75.75 0 0 0 .538-1.272l-4-4.125a.75.75 0 0 0-1.076 0l-4 4.125A.75.75 0 0 0 12 10.875h3.25V18a.75.75 0 0 0 1.5 0v-7.125z"/>
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stop-color="#cbd1da"/>
          <stop offset="100%" stop-color="#cbd1da"/>
        </linearGradient>
      </defs>
  </svg>
  `
  ]
})