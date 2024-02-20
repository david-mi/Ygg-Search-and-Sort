import styles from "./closeButton.module.css"
import { createCustomButtonWithSvgGradient } from "@views/components/shared/createCustomButtonWithSvgGradient/createCustomButtonWithSvgGradient"

export const closeSortFormButton = createCustomButtonWithSvgGradient({
  paths: [
    `<path fill="currentColor" d="m8.382 17.025l-1.407-1.4L10.593 12L6.975 8.4L8.382 7L12 10.615L15.593 7L17 8.4L13.382 12L17 15.625l-1.407 1.4L12 13.41z"/>`
  ],
  attributes: [
    ["class", styles.closeButton],
    ["type", "button"]
  ]
})